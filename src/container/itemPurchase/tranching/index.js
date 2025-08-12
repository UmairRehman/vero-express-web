import React from 'react'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CheckoutSteps from '../../../component/item-purchase/checkout/step'
import IcoLocKImage from '../../../assets/images/ico-lock.png'
import IcoBusImage from '../../../assets/images/ico-bus.png'
import IcoCheckImage from '../../../assets/images/ico-check.png'
import TempImage from '../../../assets/images/prod3.jpg'
import Rating from '../../../component/item-purchase/tracking/rating'
import TrkIco1 from '../../../assets/images/trk-ico-1.png'
import TrkIco2 from '../../../assets/images/trk-ico-2.png'
import TrkIco3 from '../../../assets/images/trk-ico-3.png'
import TrkIco4 from '../../../assets/images/trk-ico-4.png'
import TrkIco5 from '../../../assets/images/trk-ico-5.png'
import TrkIco6 from '../../../assets/images/trk-ico-6.png'
import TrkTel from '../../../assets/images/trk-tel.png'
import TrkMsg from '../../../assets/images/trk-msg.png'


function Tracking() {
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <section class="trackorder">
                <div class="container">
                    <div class="row row-checkout">
                        <div className='col-md-7'>
                            <div className="order-track">
                                <h4><b>Order Tracking</b> - AKN12508</h4>
                            </div>

                            <div className="order-list">
                                <ul>
                                    <li><b>Shipped VIA</b> <span>Driver</span></li>
                                    <li><b>Status</b> <span>On the way</span></li>
                                    <li><b>Expected</b> <span>20 Mins</span></li>
                                </ul>
                            </div>

                            <div className="track-nav">
                                <ul className="nav-circle">
                                    <li>
                                        <a className="active" href="#">
                                            <span className="track-ico">
                                                <img src={IcoLocKImage} alt="Order Placed" />
                                            </span>
                                            <b>Order Placed</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="tgreen" href="#">
                                            <span className="track-ico">
                                                <img src={IcoBusImage} alt="Out for Delivery" />
                                            </span>
                                            <b>Out for Delivery</b>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="tgrey" href="#" data-bs-toggle="modal" data-bs-target="#successpopup">
                                            <span className="track-ico">
                                                <img src={IcoCheckImage} alt="Completed" />
                                            </span>
                                            <b>Completed</b>
                                        </a>
                                    </li>
                                </ul>

                                <div className="cart-products">
                                    <h4>Items details</h4>

                                    {[...Array(5)].map((_, i) => (
                                        <div className="cart-prod-item" key={i}>
                                            <div className="cart-thumb">
                                                <a href="#"><img className="prod_img" src={TempImage} alt="Product" /></a>
                                            </div>
                                            <div className="cart-text">
                                                <a className="cart_cat" href="#"><span>Women-Fashion</span></a>
                                                <a className="cart_title" href="#">Ladies Purse Bag - Original Leather</a>
                                                <h5 className="cart-pro-total">$30.00</h5>
                                                <h6 className="cart-stock">Quantity: 2</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div className="track-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52922921.49958086!2d-161.8680740343199!3d35.943085503262225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1733070241079!5m2!1sen!2s"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div className="track-pbx">
                                <h5>Payment Details</h5>
                                <div className="track-uls">
                                    <ul>
                                        <li><label>Subtotal (items)</label> <strong>3</strong></li>
                                        <li><label>Price (Total)</label> <strong>$430.00</strong></li>
                                        <li><label>Delivery</label> <strong className="free">Free</strong></li>
                                        <li className="trk-cost"><label>Total</label> <strong>$669.00</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="track-pbx">
                                <h5>Order Details</h5>
                                <div className="track-uls">
                                    <ul>
                                        <li><label><i><img className="trk-ico" src={TrkIco2} alt="" /></i> Payment Method</label> <strong>Credit Card</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco3} alt="" /></i> Order Status</label> <strong>Order Delivered</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco1} alt="" /></i> Order ID</label> <strong>AKN12508</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco4} alt="" /></i> Driver Name</label> <strong>David Hunt</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco5} alt="" /></i> Order Date</label> <strong>30 Mar, 2024</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="track-pbx">
                                <h5>Driver Details</h5>
                                <div className="track-uls">
                                    <ul>
                                        <li><label><i><img className="trk-ico" src={TrkIco1} alt="" /></i> Driver Name</label> <strong>David Hunt</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco6} alt="" /></i> Car Make</label> <strong>Toyota</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco6} alt="" /></i> Car Model</label> <strong>Corolla</strong></li>
                                        <li><label><i><img className="trk-ico" src={TrkIco3} alt="" /></i> ETA to Delivery</label> <strong>20 Mins</strong></li>
                                    </ul>
                                </div>
                                <div className="track-btn">
                                    <a href="#" className="btn btn-green">
                                        <img className="trk-ico" src={TrkTel} alt="" /> Call
                                    </a>
                                    <a href="#" className="btn btn-blue">
                                        <img className="trk-ico" src={TrkMsg} alt="" /> Message
                                    </a>
                                </div>
                            </div>

                            <Rating />
                        </div>
                    </div>
                </div>
            </section>
            <BestSeller />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default Tracking