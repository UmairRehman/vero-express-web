import React from 'react';
import appStoreImg from '../../../assets/images/app-store.png';
import playStoreImg from '../../../assets/images/gpl-store.png';
import mobileAppImg from '../../../assets/images/mob-app.png';

const DownloadApp = () => {
    return (
        <section className="downapp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 head_style">
                        <h5>Download App</h5>
                        <h2>Have you got our App?</h2>
                        <p>
                            Download the Vero1 app for the fastest, most reliable drone delivery service. <br />
                            Track your packages in real-time and enjoy hassle-free deliveries!
                        </p>
                        <ul>
                            <li>
                                <a>
                                    <img src={appStoreImg} alt="App Store" />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={playStoreImg} alt="Google Play Store" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <img src={mobileAppImg} alt="Mobile App Preview" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
