import { render } from "@testing-library/react";
import React from "react";
import './Header.css';


class Header extends React.Component{
    constructor() {
        super()

    };
    componentDidMount() {
        let rancid = document.querySelector(".rancid")
        rancid.classList.remove("hidden")
        rancid.classList.add("appear")
    };
    render() {
        return (
            <div className="header">
                <h3 className="rancid hidden" style={{fontSize:"100px", color:"white", textShadow:"0px 0px 50px white"}}>
                    Movie Nova
                </h3>
            </div>
        );
    };
};



export default Header;