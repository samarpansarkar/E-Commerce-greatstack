import React, { useState } from "react";
import Classes from "./navbar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className={Classes.navbar}>
      <div className={Classes.nav_logo}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={Classes.nav_menu}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop {menu ==="shop"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          Men {menu ==="mens"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          Women {menu ==="womens"?<hr/>:<></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids {menu ==="kids"?<hr/>:<></>}
        </li>
      </ul>
      <div className={Classes.cart}>
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <div className={Classes.nav_cart_count}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
