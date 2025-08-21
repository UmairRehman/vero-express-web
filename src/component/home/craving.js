import React from 'react';
import { useNavigate } from 'react-router-dom';
import alterImg1 from '../../assets/images/alter-img-1.jpg';
import alterImg2 from '../../assets/images/alter-img-2.jpg';

const Craving = () => {
  const navigate = useNavigate();

  return (
    <section className="sec-alter">
      <div className="container">

        {/* First Row */}
        <div className="row">
          <div className="col-md-6 order-1">
            <img className="alter-img" src={alterImg1} alt="Craving" />
          </div>
          <div className="col-md-6 head_style">
            <h5>Craving?</h5>
            <h2>
              Everything you <br /> crave, delivered.
            </h2>
            <p>
              Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
            </p>
            <a className="btn btn-green" onClick={() => navigate('/item-purchase/explore')}>
              Explore Shops <i className="r-arrow"></i>
            </a>
          </div>
        </div>

        {/* Second Row */}
        <div className="row">
          <div className="col-md-6">
            <img className="alter-img" src={alterImg2} alt="Free Delivery" />
          </div>
          <div className="col-md-6 head_style">
            <h5>Free Delivery?</h5>
            <h2>
              VeroPass is <br /> delivery for less
            </h2>
            <p>
              Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.
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

export default Craving;
