import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [tabobv,setTabobv]=useState(false)
    const [tabtin,setTabtin]=useState(false)
    const [tabcol,setTabcol]=useState(false)

  return (
    <nav>
      <ul>
        <li><button onClick={() =>{
            setTabobv(true);
            setTabtin(false);
            setTabcol(false);

        }}>Observations</button></li>

        <li><button onClick={ () =>{
            setTabobv(false);
            setTabtin(true);
            setTabcol(false);

        }}>Tinting-Banco</button></li>
        <li><button onClick={()=>{
            setTabobv(false);
            setTabtin(false);
            setTabcol(true);

        }}>Colourants-Banco</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
