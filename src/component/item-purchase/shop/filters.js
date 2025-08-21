import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getStoreCategories } from '../../../services/stores';

const filtersData = {
    price: ["Under 25", "Under 50", "Under 75", "50to100", "Custom"],
    // colors: ["Black", "White", "Grey", "Yellow", "Orange", "Red", "Violet"],
    // shopLocation: ["Any Where", "United State", "Custom"],
    // shipTo: ["United State", "United Arab Emirates"],
};

export default function SidebarFilter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");
    const [customPrice, setCustomPrice] = useState({ low: "", high: "" });
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [shipTo, setShipTo] = useState("");
    const [showAllCategories, setShowAllCategories] = useState(false);

    // Fetch categories when store_name changes
    useEffect(() => {
        const storeName = searchParams.get("store_name");
        const fetchCategories = async () => {
            if (storeName) {
                try {
                    const res = await getStoreCategories({ store_name: storeName, page: 1 });
                    if (res?.data?.data.data) {
                        setCategories(res.data.data.data);
                    } else {
                        setCategories([]);
                    }
                } catch {
                    setCategories([]);
                }
            } else {
                setCategories([]);
            }
        };
        fetchCategories();
    }, [searchParams]);

    // Load from query params
    useEffect(() => {
        setSelectedCategory(searchParams.get("parent_id") || "");
        setSelectedPrice(searchParams.get("price") || "");
        setCustomPrice({
            low: searchParams.get("low") || "",
            high: searchParams.get("high") || "",
        });
        setSelectedColor(searchParams.get("color") || "");
        setSelectedLocation(searchParams.get("location") || "");
        setShipTo(searchParams.get("shipto") || "");
    }, []);

    // Update query params
    const updateParams = () => {
        const params = new URLSearchParams();
        params.set("store_name", searchParams.get("store_name") || "");
        if (selectedCategory) params.set("parent_id", selectedCategory);
        if (selectedPrice) params.set("price", selectedPrice);
        if (customPrice.low) params.set("low", customPrice.low);
        if (customPrice.high) params.set("high", customPrice.high);
        if (selectedColor) params.set("color", selectedColor);
        if (selectedLocation) params.set("location", selectedLocation);
        if (shipTo) params.set("shipto", shipTo);
        setSearchParams(params);
    };

    const resetAll = () => {
        setSelectedCategory("");
        setSelectedPrice("");
        setCustomPrice({ low: "", high: "" });
        setSelectedColor("");
        setSelectedLocation("");
        setShipTo("");
        setSearchParams({});
    };

    useEffect(() => {
        updateParams();
    }, [selectedCategory, selectedPrice, customPrice, selectedColor, selectedLocation, shipTo]);

    return (
        <div className="col-md-3">
            <div className="sf-filter">
                <h4>Filter</h4>

                <div className="sfil-blk">
                    <h5>Category</h5>
                    <ul>
                        {(showAllCategories ? categories : categories.slice(0, 10)).map((cat) => (
                            <li key={cat._id}>
                                <label>
                                    <input
                                        type="radio"
                                        name="category"
                                        checked={selectedCategory === cat._id}
                                        onChange={() => setSelectedCategory(cat._id)}
                                    />{" "}
                                    {cat.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                    {categories.length > 10 && (
                        <button
                            className="btn btn-link p-0"
                            style={{ fontSize: "0.95em" }}
                            onClick={() => setShowAllCategories((prev) => !prev)}
                        >
                            {showAllCategories ? "See Less" : "See More"}
                        </button>
                    )}
                </div>

                <div className="sfil-blk">
                    <h5>Price ($)</h5>
                    <ul>
                        {filtersData.price.slice(0, 4).map((p) => (
                            <li key={p}>
                                <label>
                                    <input
                                        type="radio"
                                        name="price"
                                        checked={selectedPrice === p}
                                        onChange={() => setSelectedPrice(p)}
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
                {/* 
                <div className="sfil-blk">
                    <h5>Colors</h5>
                    <ul>
                        {filtersData.colors.map((color) => (
                            <li key={color}>
                                <label>
                                    <input
                                        type="radio"
                                        name="color"
                                        checked={selectedColor === color}
                                        onChange={() => setSelectedColor(color)}
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
                                        type="radio"
                                        name="location"
                                        checked={selectedLocation === loc}
                                        onChange={() => setSelectedLocation(loc)}
                                    />{" "}
                                    {loc}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div> */}

                <div className="sfil-blk">
                    <h5>Ship to</h5>
                    <ul>
                        <li>
                            {/* <div className="lowtohigh">
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
                            </div> */}
                            <div className="reset-btns mt-2">
                                <button className="btn btn-transparent" onClick={resetAll}>
                                    Reset
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
