import React from "react";
import { useNavigate } from "react-router-dom";


function S(){
    let n = useNavigate();

    return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <button onClick={() => n('/rent')}>RENT PROPERTIES</button>
          <button onClick={() => n('/sell_p')}>SELL PROPERTIES</button>
          <button onClick={() => n('/sell_commercial_plots')}>SELL COMMERCIAL PLOTS</button>
          <button onClick={() => n('/rent_commercial_plots')}>RENT COMMERCIAL PLOTS</button>
          <button onClick={() => n('/rent_residential_plots')}>RENT RESIDENTIAL PLOTS</button>
          <button onClick={() => n('/sell_residential_plots')}>SELL RESIDENTIAL PLOTS</button>
          <button onClick={() => n('/sell_commercial_workspace')}>SELL COMMERCIAL WORKSPACE</button>
          <button onClick={() => n('/rent_commercial_workspace')}>RENT COMMERCIAL WORKSPACE</button>
          <button onClick={() => n('/residential_projects')}>Residential Projects</button>
        </div>
      );
      
}

export default S;