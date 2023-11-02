import React from 'react';

import Observ from './observ';
import Tinting from './tintingdet';
import ColorBanco from './colorantsbancodet';

import './report.css'; // Import the CSS file

const Report = ({tabobv , tabtin , tabcol}) => {
  return (
  
      <div className="container">
        <div className="box">
            {
                tabobv ? <Observ/> : ""
            }
          
        </div>
        <div className="box">
            {
                tabtin ? <Tinting/> : ""
            }
        </div>
        <div className="box">
        {
                tabcol ? <ColorBanco/> : ""
            }
        </div>
       
      </div>

      

  );
};

export default Report;
