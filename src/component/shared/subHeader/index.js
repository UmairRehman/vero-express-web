import React from 'react'
import { useNavigate } from "react-router-dom";


function SubHeader() {
    const navigate = useNavigate();
    return (
        <div className="nav-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar">
                            <ul>
                                <li><a onClick={() => navigate("/item-purchase")}>Purchase Items</a></li>
                                <li><a onClick={() => navigate("/parcel-delivery")}>Parcel Delivery</a></li>
                                <li><a >Return / Exchange Items</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader