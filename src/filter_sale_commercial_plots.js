import React from "react";
import Rating from '@mui/material/Rating';
import { Country, State, City } from "country-state-city";
import { useEffect } from "react";
import { useState } from "react";
import "./loader.css";
import { useNavigate } from "react-router-dom";


function Sell_commercial_plots_filter(){
    let [load,set_load] = useState(1);
    let [initial,set_initial] = useState([]);

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState("");

    let n = useNavigate();

    const [showPopup, setShowPopup] = useState(false);

    let open_pop_up = ()=>{
        setShowPopup(true);
    }

    let close_pop_up = ()=>{
        setShowPopup(false);
    }

    let [state,set_state] = useState("");
    let [city,set_city] = useState("");

    let [pincode,set_pincode] = useState("");

    let [min,set_min] = useState("");

    let [max,set_max] = useState("");

    let [filtered_data,set_filtered_data] = useState([]);

    let [current_rating_state,set_current_rating_state] = useState(null);
    //rating state values
    const [rating, setRating] = useState(0); // Store rating value




    

    useEffect(()=>{

        async function t(){

            let op = await fetch('http://localhost:8000/all_commercial_sale_properties',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                }
            );

            let ans = await op.json();

            console.log(ans);
            let tb=[];

            for(let temporary = 0;temporary<ans.properties.length;temporary++){

                if(Object.keys(ans.properties[0]).length <= 1){
                    continue;
                }
                else{
                    tb.push(ans.properties[temporary]);
                }

            }
            ans.properties = tb;
            const allStates = State.getStatesOfCountry("IN");
            setStates(allStates);

            set_initial(ans.properties);
            set_load(0);



        }
        t();
        
    },[]);

    const handleStateChange = (e) => {
        const stateCode = e.target.value;
      
        if (stateCode) {
          const stateDetails = State.getStateByCodeAndCountry(stateCode, "IN"); // Get state details
          set_state(stateDetails.name); // Store full state name
          setSelectedState(stateCode);
      
          // Fetch cities for the selected state
          const allCities = City.getCitiesOfState("IN", stateCode);
          setCities(allCities);
        } else {
          set_state("");
          setSelectedState("");
          setCities([]);
        }
      };

      const handleCityChange = (e) => {
        const cityName = e.target.value;
        set_city(cityName);
      };

    const handleRatingChange = (event, newValue) => {
        setRating(newValue); // Update rating when changed
    };

    let submit_ratings = async()=>{
        set_load(1);
        let iip = initial[current_rating_state];
        console.log(iip);

        let op = await fetch('http://localhost:8000/rate_property',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({a:iip,rt:rating,c:"sale_commercial_plots_rating"}),
                
            }
        );
        

        let ans = await op.json();
        if(ans.message  == "successful"){
            set_load(0);
            setRating(0);
        }




    }

    let submit_ratings_filetred = async ()=>{
        set_load(1);
        let iip = filtered_data[current_rating_state];
        console.log(iip);

        let op = await fetch('http://localhost:8000/rate_property',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({a:iip,rt:rating,c:"sale_commercial_plots_rating"}),
                
            }
        );

        let ans = await op.json();

        if(ans.message  == "successful"){
            set_load(2);
            setRating(0);
        }

    }

    

    let move_to_maps = (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        let iipl = initial[opl];

        const googleMapsUrl = `https://www.google.com/maps?q=${iipl.lat},${iipl.long}`;
        window.open(googleMapsUrl, "_blank");

    }

    let move_to_maps_p = (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        let iipl = filtered_data[opl];

        const googleMapsUrl = `https://www.google.com/maps?q=${iipl.lat},${iipl.long}`;
        window.open(googleMapsUrl, "_blank");

    }

    let filter = async() =>{

        set_load(1);

        let op = await fetch('http://localhost:8000/filter_commercial_sale_properties',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({state:state,city:city,pincode:pincode,min:min,max:max}),
                
            }
        );

        let ans = await op.json();
        console.log(ans.prop);
        set_filtered_data([...ans.prop]);
        set_load(2);

        

    }

    let ratebox= (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        set_current_rating_state(opl);

        set_load(4);

    }

    let ratebox_filtered = (e)=>{
        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        set_current_rating_state(opl);

        set_load(5);

    }

    let filter_map = ()=>{
        n("/map_sale_commercial_plots");
    }

    if(load == 1){
        return (
            <div>
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }

    if(load == 4){
        return(
            <div>
                
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} size="large" onChange={handleRatingChange} />

                    <button onClick={submit_ratings}>SUBMIT RATING</button>
                    
                
            </div>
        );
    }

    if(load == 5){
        return(
            <div>
                
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} size="large" onChange={handleRatingChange} />

                    <button onClick={submit_ratings_filetred}>SUBMIT RATING</button>
                    
                    
                
            </div>
        );

    }


    if(load == 2){
        return(
            <div>

<button onClick={()=>{
                n('/rpf');
            }}>rent properties</button>
            <button onClick={()=>{
                n('/spf');
            }}>buy properties</button>
            <button onClick={()=>{
                n('/sell_commercial_plots_filter');
            }}>buy commercial plots</button>
            
            
            <button onClick={()=>{
                n('/rent_commercial_plots_filter');
            }}>rent commercial plots</button>
            <button onClick={()=>{
                n('/rent_residential_plots_filter');
            }}>rent residential plots</button>
            <button  onClick={()=>{
                n('/sell_residential_plots_filter');
            }}>buy residential plots</button>
            <button onClick={()=>{
                n('/sell_commercial_workspace_filter');
            }}>buy commercial workspace</button>
            <button onClick={()=>{
                n('/rent_commercial_workspace_filter');
            }}>rent commercial workspace</button>
            
            <button onClick={()=>{
                n('/residential_projects_filter');
            }}>residential projects</button>

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

                 <input type="text" value={pincode} onChange={(e)=>{
                    set_pincode(e.target.value);
                }} placeholder="pincode" />

                    <input type="text" value={min} onChange={(e)=>{
                        set_min(e.target.value);
                    }} placeholder="min price" />

                    <input type="text" value={max} onChange={(e)=>{
                        set_max(e.target.value);
                    }} placeholder="max price" />

                <button onClick={filter}>filter</button>
                {
                        filtered_data.length === 0 ? (
                            <p>No data available</p>
                        ) :(filtered_data.map((key,index)=>{
                        return (
                            <div key={index}>
    
                                <p>address is</p>
                                <p>{key.addresstrivia}</p>
                                <p>area size</p>
                                <p>{key.areaSize}</p>
    
                                <p>total amount</p>
                                <p>{key.totalAmount}</p>
    
                                <button accessKey={index} onClick={move_to_maps_p}>go to location</button>
                                <button accessKey={index} onClick={ratebox_filtered}>Rate property</button>
                                <button onClick={open_pop_up}>Contact Builder </button>

                            {showPopup && (
                <div style={{
                    position: "fixed", 
                    bottom: "20px", 
                    right: "20px", 
                    background: "black", 
                    color: "white", 
                    padding: "10px", 
                    borderRadius: "5px"
                }}>
                    PLEASE SUBSCRIBE TO PRMIUM TO AVAIL THIS FEATURE

                    <button onClick={close_pop_up}>CLOSE</button>
                </div>
            )}
    
                                
    
                            </div>
                            
                        );
                    })
    
                )}
                <button onClick={filter_map}>CLICK</button>

            </div>
        );
    }


    return (
        <div>
            <button onClick={()=>{
                n('/rpf');
            }}>rent properties</button>
            <button onClick={()=>{
                n('/spf');
            }}>buy properties</button>
            <button onClick={()=>{
                n('/sell_commercial_plots_filter');
            }}>buy commercial plots</button>
            
            
            <button onClick={()=>{
                n('/rent_commercial_plots_filter');
            }}>rent commercial plots</button>
            <button onClick={()=>{
                n('/rent_residential_plots_filter');
            }}>rent residential plots</button>
            <button  onClick={()=>{
                n('/sell_residential_plots_filter');
            }}>buy residential plots</button>
            <button onClick={()=>{
                n('/sell_commercial_workspace_filter');
            }}>buy commercial workspace</button>
            <button onClick={()=>{
                n('/rent_commercial_workspace_filter');
            }}>rent commercial workspace</button>
            
            <button onClick={()=>{
                n('/residential_projects_filter');
            }}>residential projects</button>
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

            <input type="text" value={pincode} onChange={(e)=>{
                set_pincode(e.target.value);
            }} placeholder="pincode" />

            <input type="text" value={min} onChange={(e)=>{
                set_min(e.target.value);
            }} placeholder="min price" />

            <input type="text" value={max} onChange={(e)=>{
                set_max(e.target.value);
            }} placeholder="max price" />

            <button onClick={filter}>filter</button>





            {
                initial.length === 0 ? (
                    <p>No data available</p>
                ):(initial.map((key,index)=>{
                    return (
                        <div key={index}>

                            <p>address is</p>
                            <p>{key.addresstrivia}</p>
                            <p>area size</p>
                            <p>{key.areaSize}</p>

                            <p>total amount</p>
                            <p>{key.totalAmount}</p>

                            <button accessKey={index} onClick={move_to_maps}>go to location</button>
                            <button accessKey={index} onClick={ratebox}>Rate property</button>
                            <button onClick={open_pop_up}>Contact Builder </button>

                            {showPopup && (
                <div style={{
                    position: "fixed", 
                    bottom: "20px", 
                    right: "20px", 
                    background: "black", 
                    color: "white", 
                    padding: "10px", 
                    borderRadius: "5px"
                }}>
                    PLEASE SUBSCRIBE TO PRMIUM TO AVAIL THIS FEATURE

                    <button onClick={close_pop_up}>CLOSE</button>
                </div>
            )}

                            

                        </div>
                        
                    );
                }))

            }


        <button onClick={filter_map}>CLICK</button>

        </div>
    );
}

export default Sell_commercial_plots_filter;