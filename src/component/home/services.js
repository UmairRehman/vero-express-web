import React from 'react';
import service1 from '../../assets/images/service-1.jpg';
import service2 from '../../assets/images/service-2.jpg';
import service3 from '../../assets/images/service-3.jpg';

const ServiceSection = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="row">
          <div className="col-md-12 head_style center">
            <h5>Services?</h5>
            <h2>Services For You On Demand</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="sfuod-item">
              <img className="service-img" src={service1} alt="Purchase Items" />
              <h5>Purchase Items</h5>
              <p>
                Seamlessly buy items with Vero1. Enjoy a smooth, secure purchasing process for all your needs.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sfuod-item">
              <img className="service-img" src={service2} alt="Deliver Parcel" />
              <h5>Deliver Parcel</h5>
              <p>
                Trust Vero1 for reliable parcel delivery. Fast, efficient, and secure, ensuring your packages arrive on time.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="sfuod-item">
              <img className="service-img" src={service3} alt="Return / Exchange" />
              <h5>Return / Exchange</h5>
              <p>
                Vero1 makes returns and exchanges easy. Simple, hassle-free process to ensure satisfaction with your purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
