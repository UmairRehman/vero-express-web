import React from 'react'
import DemoIconImage from '../../assets/images/dmenu-icon1.png';
import DemoIconImage2 from '../../assets/images/dmenu-icon2.png';
import DemoIconImage3 from '../../assets/images/dmenu-icon3.png';
import DemoIconImage4 from '../../assets/images/dmenu-icon4.png';
import DemoIconImage5 from '../../assets/images/dmenu-icon5.png';
import DemoIconImage6 from '../../assets/images/dmenu-icon6.png';
import DemoIconImage7 from '../../assets/images/dmenu-icon7.png';
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <>
            <div class="dash-left">
                <div class="dash-logo"></div>
                <div class="dash-menu">
                    <ul>
                        <li onClick={() => navigate("../dashboard")}><a >
                            <i><img src={DemoIconImage} alt="" /></i> Dashboard</a></li>
                        <li onClick={() => navigate("../dashboard/profile")}><a >
                            <i><img src={DemoIconImage2} alt="" /></i> User Profile</a></li>
                        <li onClick={() => navigate("../dashboard/booking")}><a >
                            <i><img src={DemoIconImage3} alt="" /></i> Booking Log</a></li>
                        <li onClick={() => navigate("../dashboard/wallet")}><a>
                            <i><img src={DemoIconImage5} alt="" /></i> Wallet</a></li>
                        <li onClick={() => navigate("../dashboard/support")}>
                            <a >
                                <i><img src={DemoIconImage4} alt="" /></i> Support</a>
                        </li>
                        <li onClick={() => navigate("../dashboard/setting")}>
                            <a >
                                <i><img src={DemoIconImage6} alt="" /></i> Settings
                            </a>
                        </li>
                        <li>
                            <a >
                                <i><img src={DemoIconImage7} alt="" /></i>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar