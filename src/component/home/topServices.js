import React, { useState, useEffect } from 'react';
import { getStores } from '../../services/stores';

const TopServices = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const { data: res } = await getStores({ per_page: 12, page: 1 });

      if (res.success && res.data) {
        setStores(res.data);
      }
    } catch (error) {
      console.log('Error fetching stores:', error);
    }
  };


  const displayStores = stores;

  return (
    <section className="top-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 head_style center">
            <h5>Top Stores</h5>
            <h2>Some Top Stores for you to Shop</h2>
          </div>
        </div>

        {/* Render stores in rows of 3 */}
        <div className="row">
          {displayStores.map((store, index) => (
            <div className="col-md-4" key={store._id || index}>
              <div className="ts-item">
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
            <a className="btn btn-green">
              Explore All Stores <i className="r-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
