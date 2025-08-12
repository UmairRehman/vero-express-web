import React from "react";
import { useNavigate } from 'react-router-dom';

const TopStores = () => {
    const navigate = useNavigate();

    const topStores = [
        { name: "Costco", img: "ts-icon-4.png", delivery: "Delivery" },
        { name: "Safeway", img: "ts-icon-5.png", delivery: "Delivery by 6:58am", highlight: true },
        { name: "Smart & Final", img: "ts-icon-6.png", delivery: "Delivery" },
        { name: "Bi-Rite Market", img: "ts-icon-7.png", delivery: "Delivery" },
        { name: "Rainbow Grocery", img: "ts-icon-8.png", delivery: "Delivery by 6:58am", highlight: true },
        { name: "H Mart", img: "ts-icon-9.png", delivery: "Delivery" },
        { name: "CVS", img: "ts-icon-10.png", delivery: "Delivery" },
        { name: "Falletti Foods", img: "ts-icon-11.png", delivery: "Delivery by 6:58am", highlight: true },
        { name: "Petco", img: "ts-icon-12.png", delivery: "Delivery" },
    ];
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-6 head_style">
                    <h2>Top Available Stores</h2>
                </div>

                <div className="col-md-6">
                    <ul className="tas-filter">
                        <li>
                            <label>Display:</label>
                            <select>
                                <option>Display 1</option>
                                <option>Display 2</option>
                                <option>Display 3</option>
                            </select>
                        </li>

                        <li>
                            <label>Sort By:</label>
                            <select>
                                <option>ASC</option>
                                <option>DESC</option>
                            </select>
                        </li>

                        <li>
                            <label>Grid:</label>
                            <select>
                                <option>ASC</option>
                                <option>DESC</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                {topStores.map((store, index) => (
                    <div className="col-md-4" key={index} onClick={() => navigate("../item-purchase/shop")}>
                        <div className="ts-item">
                            <img src={`../../../../../assets/images /${store.img}`} alt={store.name} />
                            <h4>
                                <strong>{store.name}</strong>{" "}
                                <span className={`dd_time ${store.highlight ? "dgreen" : ""}`}>
                                    {store.delivery}
                                </span>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TopStores;
