import React from 'react';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/cart-ico.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

              <div className="hd-left">
                <i className="fa fa-bars" aria-hidden="true"></i>
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>

              <div className="hd-center">
                <form className="hd-search" action="#">
                  <input
                    className="hd-search-input"
                    name="search_input"
                    type="text"
                    placeholder="Search (Ctrl+/)"
                  />
                  <select className="hd-search-select" name="search_select">
                    <option>All Categories</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </form>
              </div>

              <div className="hd-right">
                <ul>
                  <li><div className="flags"></div></li>
                  <li>
                    <a className="btn btn-red btn-cart" >
                      <img src={cartIcon} alt="Cart" />
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-green" onClick={() => navigate("/login")}>Sign In</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
