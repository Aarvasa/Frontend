import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "./loader.css";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
function Rent_commercial_workspace() {
    let [load,set_load] = useState(0);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    let n = useNavigate();
    const [formData, setFormData] = useState({
        Ready_to_move_offices : 0,
        Bare_shell_offices : 0,
        shops_and_retail: 0,
        Ware_house: 0,
        cold_storage: 0,
        FactoryManufacturing: 0,
        Hotel: 0,
        Guest_House: 0,
        
        parking: 0,
        gasPipeline: 0,
        lift: 0,
        securityPersonnel: 0,
        powerBackup: 0,
        acRoom: 0,
        wifi: 0,
        areaSize: "",
        addresstrivia: "",
        totalAmount: "",
        Email:"",
        Url : "",
        state:"",
        city:"",
        pincode:"",
        price_per_sqft:""
        
        
    });
    let [images,set_image] = useState([]);

    let a = useRef();
    let b = useRef();
    useEffect(()=>{

        a.current = window.cloudinary;
        b.current = a.current.createUploadWidget({

            cloudName: "dqhddm7mi",
            apiKey: "222323681783653",
            uploadPreset: "aarvasa",
            folder: "property_media",
            sources: ["local", "camera"],
            resourceType: "auto",

        },function(error,result){
            if (!error && result && result.event === "success") {
                const file = result.info;
                console.log(file.secure_url);
                let rghj = images;
                rghj.push(file.secure_url);

                set_image([...rghj]);
            }
        });

        const allStates = State.getStatesOfCountry("IN");
        setStates(allStates);

    },[]);

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
      
        if (stateCode) {
          const stateDetails = State.getStateByCodeAndCountry(stateCode, "IN"); // Get state details
          setFormData({ ...formData, state: stateDetails.name });
          
          setSelectedState(stateCode);
      
          // Fetch cities for the selected state
          const allCities = City.getCitiesOfState("IN", stateCode);
          setCities(allCities);
        } else {
        setFormData({ ...formData, state: "" });
          setSelectedState("");
          setCities([]);
        }
      };

      const handleCityChange = (e) => {
        const cityName = e.target.value;
        setFormData({ ...formData, city: cityName });
        
      };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked ? 1 : 0 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let sbmt = async()=>{
        set_load(1);
        let abd = {...formData};
        abd.images = images;
        let op = await fetch('http://localhost:8000/post_rent_commercial_workspace',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(abd),
            }
        );

        let kfg = await op.json();

        if(kfg.message == "successful"){
            set_load(2);

        }


    }

    let back = ()=>{
        n('/sell');

    }

    if(load == 2){

        return (
            <div className="loader-container">
                <p>PROPERTY UPLOADED SUCCESSFULLY</p>
                <p>PROPERTY DETAILS</p>
                <ul>
                {Object.entries(formData).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
        ))}
                </ul>

                {
                    /*[...images].map((key,index)=>{
                        return(
                            <div key={index}>

                                <img src={key} alt="prop_image"/>
                            </div>
                        );
                    })*/
                }

                <button onClick={back}>GO BACK</button>
            </div>
            
            
        );

    }

    if(load == 1){
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
            
            
        );
    }

    return (
        <div>
            <h2>RENT YOUR COMMERCIAL WORKSPACE</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {Object.keys(formData).map((key) => (
                    key.includes("state") ? (
                        <div>
                    <label htmlFor="state">State: </label>
                    <select id="state" onChange={handleStateChange}>
                    <option value="">Select a State</option>
                    {states.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                    </option>
                    ))}
                    </select>
                    </div>
                    
                    ): key.includes("city") ? (
                        <div>
                    <label htmlFor="city">City: </label>
                    <select
                    id="city"
                    onChange={handleCityChange}
                    disabled={!selectedState}
                    >
                    <option value="">Select a City</option>
                    {cities.map((city) => (
                    <option key={city.id} value={city.name}>
                    {city.name}
                    </option>
                    ))}
                    </select>
                    </div>
                    
                    ):key.includes("areaSize") || key.includes("addresstrivia") || key.includes("noOfRooms") || key.includes("totalAmount") || key.includes("Email") || key.includes("Url") || key.includes("state") || key.includes("city") || key.includes("pincode") || key.includes("price_per_sqft") ? (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                            <label>{key.replace(/([A-Z])/g, " $1").trim()}:</label>
                            <input type="text" name={key} value={formData[key]} onChange={handleInputChange} />
                        </div>
                    ) : (
                        <div key={key} style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                            <label>{key.replace(/([A-Z])/g, " $1").trim()}</label>
                            <input
                                type="checkbox"
                                name={key}
                                checked={formData[key] === 1}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    )
                ))}
            </div>
            <button onClick={()=>{
            b.current.open();
        }}>UPLOAD IMAGES AND VIDEOS </button>
            <button onClick={sbmt} style={{ marginTop: "10px" }}>SUBMIT FORM </button>
        </div>
    );
}

export default Rent_commercial_workspace;
