import React from 'react';
import { useNavigate } from "react-router-dom";


const BannerHome = () => {
  const navigate = useNavigate();
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Parcel?</h4>
            <h1>
              Anything you <br />
              need, on demand
            </h1>
            <p>
              Best cooks and best delivery guys all at your <br />
              service. Hot tasty food will reach you in 20mins.
            </p>
            <a className="btn btn-green" onClick={() => navigate("../item-purchase/explore")} >Explore More</a>
            <h6>
              Already member of our community?{' '}
              <a onClick={() => navigate("/login")}>Sign in</a>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
