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
                <h3 className="rancid hidden" style={{fontSize:"150px", color:"white", textShadow:"0px 0px 400px white, 0px 0px 300px white, 0px 0px 200px white, 0px 0px 100px white, 0px 0px 100px white, 0px 0px 75px white, 0px 0px 20px white"}}>
                    Movie Nova
                </h3>
            </div>
        );
    };
};



export default Header;