import React from 'react';
import privacy1 from '../../assets/images/privacy-bor-1.jpg';
import privacy2 from '../../assets/images/privacy-bor-2.jpg';
import privacy3 from '../../assets/images/privacy-bor-3.jpg';
import privacy4 from '../../assets/images/privacy-bor-4.jpg';

const PrivacySec = () => {
  const items = [
    {
      img: privacy1,
      title: 'Return packages from home',
      text: 'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
      btn: 'Try Pickup',
    },
    {
      img: privacy2,
      title: 'Flowers for any occasion',
      text: 'Shop hand-picked and thoughtfully-arranged blooms from florists near you.',
      btn: 'Try Pickup',
    },
    {
      img: privacy3,
      title: 'Restock the minibar',
      text: 'Hosting a get-together or need or need a special cocktail ingredient? Get mixers, champagne and wine delivered fast.*',
      btn: 'Shop Alcohol',
    },
    {
      img: privacy4,
      title: 'What your pets need, and want',
      text: 'Finally, something cat and dog people agree on — pet supplies delivery. Shop pet food, chew toys, and even costumes.',
      btn: 'Get Pet Supplies',
    },
  ];

  return (
    <section className="privacy-sec">
      <div className="container">
        <div className="row">
          {items.slice(0, 2).map((item, index) => (
            <div className="col-md-6" key={index}>
              <img className="privacy-bor" src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <a className="btn btn-green" >
                {item.btn}
              </a>
            </div>
          ))}
        </div>
        <div className="row">
          {items.slice(2, 4).map((item, index) => (
            <div className="col-md-6" key={index + 2}>
              <img className="privacy-bor" src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
              <a className="btn btn-green" >
                {item.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySec;
