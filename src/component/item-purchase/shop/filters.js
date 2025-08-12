import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const filtersData = {
    offers: ["Free Shipping", "On Sale", "Best Sellers"],
    price: ["Under 25", "Under 50", "Under 75", "50to100", "Custom"],
    colors: ["Black", "White", "Grey", "Yellow", "Orange", "Red", "Violet"],
    shopLocation: ["Any Where", "United State", "Custom"],
    shipTo: ["United State", "United Arab Emirates"],
};

export default function SidebarFilter() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedOffers, setSelectedOffers] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);
    const [customPrice, setCustomPrice] = useState({ low: "", high: "" });
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [shipTo, setShipTo] = useState("");

    // Load from query params
    useEffect(() => {
        setSelectedOffers(searchParams.getAll("offer"));
        setSelectedPrice(searchParams.getAll("price"));
        setCustomPrice({
            low: searchParams.get("low") || "",
            high: searchParams.get("high") || "",
        });
        setSelectedColors(searchParams.getAll("color"));
        setSelectedLocation(searchParams.getAll("location"));
        setShipTo(searchParams.get("shipto") || "");
    }, []);

    // Trigger on change (mock API call)
    useEffect(() => {
        console.log("Filters changed, make API call...");
        // you can call your API here
    }, [selectedOffers, selectedPrice, customPrice, selectedColors, selectedLocation, shipTo]);

    // Update query params
    const updateParams = () => {
        const params = new URLSearchParams();
        selectedOffers.forEach((offer) => params.append("offer", offer));
        selectedPrice.forEach((p) => params.append("price", p));
        if (customPrice.low) params.set("low", customPrice.low);
        if (customPrice.high) params.set("high", customPrice.high);
        selectedColors.forEach((c) => params.append("color", c));
        selectedLocation.forEach((l) => params.append("location", l));
        if (shipTo) params.set("shipto", shipTo);
        setSearchParams(params);
    };

    const handleCheckbox = (value, setFn, list) => {
        const updated = list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value];
        setFn(updated);
    };

    const resetAll = () => {
        setSelectedOffers([]);
        setSelectedPrice([]);
        setCustomPrice({ low: "", high: "" });
        setSelectedColors([]);
        setSelectedLocation([]);
        setShipTo("");
        setSearchParams({});
    };

    useEffect(() => {
        updateParams();
    }, [selectedOffers, selectedPrice, customPrice, selectedColors, selectedLocation, shipTo]);

    return (
        <div className="col-md-3">
            <div className="sf-filter">
                <h4>Filter</h4>

                <div className="sfil-blk">
                    <h5>Special Offers</h5>
                    <ul>
                        {filtersData.offers.map((offer) => (
                            <li key={offer}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedOffers.includes(offer)}
                                        onChange={() =>
                                            handleCheckbox(offer, setSelectedOffers, selectedOffers)
                                        }
                                    />{" "}
                                    {offer}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sfil-blk">
                    <h5>Price ($)</h5>
                    <ul>
                        {filtersData.price.slice(0, 4).map((p) => (
                            <li key={p}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedPrice.includes(p)}
                                        onChange={() =>
                                            handleCheckbox(p, setSelectedPrice, selectedPrice)
                                        }
                                    />{" "}
                                    {p.replace("Under ", "Under USD ").replace("50to100", "USD 50 to 100")}
                                </label>
                            </li>
                        ))}
                        <li>
                            <div className="lowtohigh">
                                <input
                                    className="form-control low"
                                    type="text"
                                    value={customPrice.low}
                                    placeholder="Low"
                                    onChange={(e) =>
                                        setCustomPrice({ ...customPrice, low: e.target.value })
                                    }
                                />
                                <label className="lwth">to</label>
                                <input
                                    className="form-control high"
                                    type="text"
                                    value={customPrice.high}
                                    placeholder="High"
                                    onChange={(e) =>
                                        setCustomPrice({ ...customPrice, high: e.target.value })
                                    }
                                />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="sfil-blk">
                    <h5>Colors</h5>
                    <ul>
                        {filtersData.colors.map((color) => (
                            <li key={color}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedColors.includes(color)}
                                        onChange={() =>
                                            handleCheckbox(color, setSelectedColors, selectedColors)
                                        }
                                    />{" "}
                                    {color}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sfil-blk">
                    <h5>Shop Location</h5>
                    <ul>
                        {filtersData.shopLocation.map((loc) => (
                            <li key={loc}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedLocation.includes(loc)}
                                        onChange={() =>
                                            handleCheckbox(loc, setSelectedLocation, selectedLocation)
                                        }
                                    />{" "}
                                    {loc}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sfil-blk">
                    <h5>Ship to</h5>
                    <ul>
                        <li>
                            <div className="lowtohigh">
                                <select
                                    className="form-control"
                                    value={shipTo}
                                    onChange={(e) => setShipTo(e.target.value)}
                                >
                                    <option value="">-- Select --</option>
                                    {filtersData.shipTo.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="reset-btns mt-2">
                                <button className="btn btn-transparent" onClick={resetAll}>
                                    Reset
                                </button>
                                <button className="btn btn-orange" onClick={updateParams}>
                                    Apply
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
