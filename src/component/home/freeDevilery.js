import React from 'react';
import { useNavigate } from 'react-router-dom';
import alterImg3 from '../../assets/images/alter-img-3.jpg';
import alterImg4 from '../../assets/images/alter-img-4.jpg';

const FreeDelivery = () => {
  const navigate = useNavigate();

  return (
    <section className="sec-alter">
      <div className="container">

        <div className="row">
          <div className="col-md-6 order-1">
            <img className="alter-img" src={alterImg3} alt="Get Paid" />
          </div>
          <div className="col-md-6 head_style">
            <h5>Get Paid?</h5>
            <h2>Sign up to Vero1 <br /> and get paid</h2>
            <p>
              Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes.
            </p>
            <a className="btn btn-green" onClick={() => navigate('/item-purchase/explore')}>
              Explore Shops <i className="r-arrow"></i>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 order-1">
            <img className="alter-img" src={alterImg4} alt="Grow Business" />
          </div>
          <div className="col-md-6 head_style">
            <h5>Free Delivery?</h5>
            <h2>Grow your business<br /> with Vero1</h2>
            <p>
              Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales.
            </p>
            <a className="btn btn-green" onClick={() => navigate('/item-purchase/explore')}>
              Explore Shops <i className="r-arrow"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeDelivery;
