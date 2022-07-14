import React from "react";
import './Header.css';

const Header = () => {
    console.log("Header component");
    return (
        <div className="header">
            <h3 style={{fontSize:"60px"}}>
                Rancid Tomatillos
            </h3>
        </div>
    );
};



export default Header;