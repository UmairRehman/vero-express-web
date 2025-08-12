import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function ShopHeader() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    // Read from query param on load
    const defaultSort = searchParams.get('sort') || 'apple';
    const [sortOption, setSortOption] = useState(defaultSort);

    useEffect(() => {
        setSortOption(defaultSort);
    }, [defaultSort]);

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value);

        // Update query param
        searchParams.set('sort', value);
        setSearchParams(searchParams);

        // Optional: trigger an API call or filter function here
        console.log("Sort changed to:", value);
    };
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="sory_by_list">
                        <div className="head_style">
                            <h2>Lifestyle</h2>
                            <p>Showing All 12 Results</p>
                        </div>
                        <div className="sory_by_pro">
                            <label htmlFor="sortBy">Sort By:</label>
                            <select
                                id="sortBy"
                                className="sort_by_brand"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option value="apple">Brand: Apple</option>
                                <option value="bnana">Brand: Bnana</option>
                                <option value="grapes">Brand: Grapes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopHeader