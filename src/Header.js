import React from "react";
import './Header.css';

const Header = ({ animate }) => {

    return (
        <div className="header">
            <h3 style={{fontSize:"100px", color:"white", textShadow:"0px 0px 50px white"}} onDoubleClick={animate}>
                Rancid Tomatillos
            </h3>
        </div>
    );
};



export default Header;