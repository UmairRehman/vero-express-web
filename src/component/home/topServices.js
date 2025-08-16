import React, { useState, useEffect } from 'react';
import { getStores } from '../../services/stores';
import { useNavigate } from "react-router-dom";
import StoresSmallCard from './storesSmallCard';

const TopServices = () => {

  return (
    <section className="top-service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 head_style center">
            <h5>Top Stores</h5>
            <h2>Some Top Stores for you to Shop</h2>
          </div>
        </div>

        <StoresSmallCard />

      </div>
    </section>
  );
};

export default TopServices;
