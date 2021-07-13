import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo3.jpg";
import cartIcon from '../Images/cart-icon2.jpg'

const Navigation = () => {

    const cartStyle = {
       background: '#FF8C00',
       display: "flex",
       padding: '6px 12px',
       borderRadius:'50px',
       textDecoration:'white'
    }

  return (
    <nav className="container mx-auto flex items-center  justify-between py-4">
      <Link to="/">
        <img style={{ height: 90 }} src={logo} alt="pizza-logo"/>
      </Link>
      <ul className="flex items-center">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li className="ml-6">
          <Link to="/products">Products</Link>
        </li>
        <li className="ml-6">
          <Link to="/cart">
              <div style={cartStyle}>
                  <span className='text-white'>10</span>
                  <img className='ml-3 rounded-full py-0.1' style = {{height: 40}}src={cartIcon} alt="cart-icon" />
              </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
