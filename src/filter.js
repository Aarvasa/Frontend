import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import "./loader.css";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';

function F(){
    let [load,set_load] = useState(1);
    let [initial,set_initial] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    let [current_rating_state,set_current_rating_state] = useState(null);
    //rating state values
    const [rating, setRating] = useState(0); // Store rating value

    let open_pop_up = ()=>{
        setShowPopup(true);
    }

    let close_pop_up = ()=>{
        setShowPopup(false);
    }

    let ratebox= (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        set_current_rating_state(opl);

        set_load(4);

    }

    let n = useNavigate();

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
                body : JSON.stringify({a:iip,rt:rating,c:"rent_rating"}),
                
            }
        );

        let ans = await op.json();
        if(ans.message  == "successful"){
            set_load(0);
            setRating(0);
        }




    }

    



    useEffect(()=>{

        async function t(){

            let op = await fetch('http://localhost:8000/all_rent_properties',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                }
            );

            let ans = await op.json();

            console.log(ans);

            set_initial(ans.properties);
            set_load(0);



        }
        t();
        
    },[]);

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

    let move_to_maps = (e)=>{

        let rty = e.target.accessKey;

        let opl = parseInt(rty,10);

        let iipl = initial[opl];

        const googleMapsUrl = `https://www.google.com/maps?q=${iipl.lat},${iipl.long}`;
        window.open(googleMapsUrl, "_blank");

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

           

            {
                /*initial.length === 0 ? (
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

            */}



            

            
            
        </div>
    );
}

export default F;