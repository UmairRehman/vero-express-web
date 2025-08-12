import React from 'react'
import bannerImage from '../../assets/images/banner-returns.jpg';
import { useNavigate } from 'react-router-dom';
function ParcelBanner() {
    const navigate = useNavigate();
    return (
        <>
            <section
                className="banner banner-delivery"
                style={{ backgroundImage: bannerImage }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>
                                Hassle-free shopping: <br />
                                quickly and easily <span>return/ <br /> exchange</span> purchased items
                            </h1>
                            <p>
                                Vero1 delivers your parcels quickly and securely, ensuring they arrive on time. <br />
                                With real-time tracking and reliable service, sending packages has never been easier. <br />
                                Trust Vero1 for hassle-free parcel delivery every time.
                            </p>
                            <a className="btn btn-green" onClick={() => navigate('/parcel-delivery/order')}>
                                Start Order
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ParcelBanner