import React from 'react'
import WpdImage from '../../assets/images/wpdfu-1.png';
import WpdImage2 from '../../assets/images/wpdfu-2.png';
import WpdImage3 from '../../assets/images/wpdfu-3.png';
import WpdImage4 from '../../assets/images/wpdfu-4.png';
import WpdImage5 from '../../assets/images/wpdfu-5.png';
import WpdImage6 from '../../assets/images/wpdfu-6.png';



function WhyChooseUs() {
    return (
        <>
            <section className="wpdfu_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 head_style center">
                            <h5>Why Us</h5>
                            <h2>Why Parcel Delivery From Us</h2>
                            <p>
                                Everything you need to know right here at your fingertips. Ask questions, browse <br />
                                around for answers, or submit your feature requests.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage} alt="" />
                                </div>
                                <h4>Thousands of Products</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage2} alt="" />
                                </div>
                                <h4>Cheapest Price</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage3} alt="" />
                                </div>
                                <h4>24-7 Customer Support</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage4} alt="" />
                                </div>
                                <h4>Return Warranty</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage5} alt="" />
                                </div>
                                <h4>Simple and Easy</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="wpdfu-item">
                                <div className="wpdfu_thumb">
                                    <img src={WpdImage6} alt="" />
                                </div>
                                <h4>Your Favorite Stores</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs