import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./css/header.css";
// import SearchIcon from '@material-ui/icons/Search';
function Header(){
    return(
        <>
       <div className=" header">
        <Link to="/">
        
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="amazon-logo"></img>
        </Link>

         <div className="Header-search">
            <input type="text"/>
            {/* <SearchIcon/>
             */}

         </div>
         <div className="nav">
            <div className="header-nav">
                <span className="header-optionone">Hello Mahabar</span>
                <span className="header-optiotwo">Sing In</span>
            </div>
            <div className="header-nav">
                <span className="header-optionone">return</span>
                <span className="header-optiotwo">& Orders</span>
            </div>
            <div className="header-nav">
               <Link to="/cart">
                {/* <span className="header-optionone">Basket</span> */}
                <span className="header-optiotwo">Cart</span>
                </Link>
                {/* <SearchIcon/> */}
            </div>

         </div>

       </div>
       <div className="header-button">
        <ul>
            <Link to="/">
            <li>all</li>
            </Link>
            <li>AmazonTV</li>
            <Link to="/bast">
            <li>Best Sellers </li>
            </Link>
            <Link to="/mobile">
            <li>Mobiles</li>
            </Link>
            <li>Customer Service </li>
            <Link to="/elec">
            <li>Electrinics</li>
            </Link>
            <Link to="/fashon">
            <li>Foshin</li>
            </Link>
        </ul>
        <img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/SWM_400x39_Physics-Wallah_V2._CB619439574_.jpg"/>

       </div>
       </>
    );
}
export default Header;
