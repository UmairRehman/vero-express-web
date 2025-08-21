import React from 'react';
import logo from '../../assets/images/logo.svg';
import cartIcon from '../../assets/images/cart-ico.png';
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, Space } from 'antd';
import { getUserDetails, Logout } from '../../redux/feature/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector(getUserDetails) || null;
  const dispatch = useDispatch();

  const onClickLogout = () => {
    localStorage.removeItem("authorization");
    dispatch(Logout());
  }

  const items = [
    {
      key: '1',
      label: (
        <a onClick={onClickLogout}>
          Logout
        </a>
      ),
    }
  ];
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">

              <div className="hd-left">
                <i className="fa fa-bars" aria-hidden="true"></i>
                <a onClick={() => navigate("/")}>
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
                  {user?._id &&
                    <li>
                      <a onClick={() => navigate("../item-purchase/cart-details")} className="btn btn-red btn-cart" >
                        <img src={cartIcon} alt="Cart" />
                      </a>
                    </li>
                  }
                  <li>
                    <a className="">
                      {!!user?.avatar?.length
                        && <Avatar src={user?.avatar} />}
                      {user?._id && !user?.avatar?.length &&
                        <Avatar style={{ backgroundColor: 'white' }} icon={<UserOutlined style={{ color: "#0A1436" }} />} />
                      }

                    </a>
                    {!user?._id &&
                      <a className="btn btn-green" onClick={() => navigate("/login")}>Sign In</a>
                    }
                    {user?._id &&
                      <a>
                        <Dropdown menu={{ items }} placement="bottomRight">
                          <Button style={{ backgroundColor: "inherit", border: "none", color: "white" }}>{user?.full_name} <DownOutlined style={{ marginTop: "4px" }} /></Button>
                        </Dropdown>
                      </a>
                    }
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
