import React from "react";
import logo from './Images/logo.png';

const Header = () =>{
    return(
        <React.Fragment>
                 <div className="header">
                       <img src={logo} alt="logo" width="80" height="70"/>
                       <h1 className="heading">Mahesh,keep</h1>
                 </div>
        </React.Fragment>
    )
}
export default Header;