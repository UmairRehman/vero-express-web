import React, { useState, useEffect } from 'react';
import { getStores } from '../../services/stores';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedStore } from '../../redux/feature/stores';


function StoresSmallCard() {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        fetchStores();
    }, []);

    const fetchStores = async () => {
        try {
            const { data: res } = await getStores({ per_page: 12, page: 1 });

            if (res.success && res.data) {
                setStores(res.data.data);
            }
        } catch (error) {
            console.log('Error fetching stores:', error);
        }
    };


    const displayStores = stores;
    return (
        <>
            {/* Render stores in rows of 3 */}
            <div className="row">
                {!!displayStores.length && displayStores.map((store, index) => (
                    <div className="col-md-4" key={store._id || index}>
                        <div
                            className="ts-item"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                navigate(
                                    `/item-purchase/shop?store_name=${encodeURIComponent(store.store_name || store.display_name)}&store_id=${store._id}`
                                );
                                dispatch(setSelectedStore(store));
                            }}
                        >
                            <img
                                src={store.store_logo || store.store_logo_white || ''}
                                alt={store.display_name || store.store_name}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <h4>
                                <strong>{store.display_name || store.store_name}</strong>{' '}
                                <span className={`dd_time ${store.green ? 'dgreen' : ''}`}>
                                    {store.time || 'Delivery'}
                                </span>
                            </h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <a className="btn btn-green" onClick={() => navigate("../item-purchase/explore")}>
                        Explore All Stores <i className="r-arrow"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default StoresSmallCard