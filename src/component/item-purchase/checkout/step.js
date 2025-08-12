import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TempImage from '../../../assets/images/prod3.jpg'
import CartItem from "../cart/cart.product";


const CheckoutSteps = () => {

    const initialCartItems = [
        {
            id: 1,
            category: "Women-Fashion",
            title: "Ladies Purse Bag - Original Leather",
            image: TempImage,
            price: 30.0,
            originalPrice: 47.0,
            stock: "In Stock",
            quantity: 1,
        },
        {
            id: 2,
            category: "Women-Fashion",
            title: "Ladies Purse Bag - Original Leather",
            image: TempImage,
            price: 30.0,
            originalPrice: 47.0,
            stock: "In Stock",
            quantity: 1,
        },
        {
            id: 3,
            category: "Women-Fashion",
            title: "Ladies Purse Bag - Original Leather",
            image: TempImage,
            price: 30.0,
            originalPrice: 47.0,
            stock: "In Stock",
            quantity: 1,
        },
    ];
    const [activeStep, setActiveStep] = useState("shipping");
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    const handleQtyChange = (id, delta) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, Math.min(item.quantity + delta, 10)) }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    return (
        <div className="check-add custom-nav">
            <ul className="nav nav-tabs">
                <li onClick={() => handleStepClick("shipping")}>
                    <a className={activeStep === "shipping" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src="/assets/images/sign-step1.png" alt="" />
                        </span>
                        <b>Shipping</b>
                        <span>Address Details</span>
                    </a>
                    <i className="fas fa-chevron-right"></i>
                </li>

                <li onClick={() => handleStepClick("delivery")}>
                    <a className={activeStep === "delivery" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src="/assets/images/sign-step2.png" alt="" />
                        </span>
                        <b>Delivery</b>
                        <span>Delivery Method</span>
                    </a>
                    <i className="fas fa-chevron-right"></i>
                </li>

                <li onClick={() => handleStepClick("payment")}>
                    <a className={activeStep === "payment" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src="/assets/images/sign-step3.png" alt="" />
                        </span>
                        <b>Payment</b>
                        <span>Payment Method</span>
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                {activeStep === "shipping" && (
                    <div className="tab-pane active" id="shipping">
                        <h4 className="chk_h4">1. Shipping, arrives between Mon, May 16—Tue, May 24</h4>
                        <div className="chk_list_add">
                            <h5>Shipping address <span>Where should we deliver your order?</span></h5>
                            <Button className="btn btn-lgreen">+ Add New Address</Button>
                        </div>
                        <div className="chk_blklist">
                            {[1, 2, 3].map((i) => (
                                <div className="chk_list_blk" key={i}>
                                    <div className="chk_input_chk">
                                        <input type="checkbox" className="chk_chk" />
                                        <h6>James Smith <span>12072 W McMillan Rd, Boise, IL - 87313</span></h6>
                                    </div>
                                    <a className="chk_edit" href="#"><i className="fa fa-edit"></i> Edit</a>
                                </div>
                            ))}
                        </div>

                        <div className="cart-products">
                            <h4>Items details</h4>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onQtyChange={handleQtyChange}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>

                        <div className="btn-nex-prev">
                            <Button variant="primary" onClick={() => setActiveStep("delivery")}>Continue</Button>
                        </div>
                    </div>
                )}

                {activeStep === "delivery" && (
                    <div className="tab-pane active" id="delivery">
                        <h4 className="chk_h4">1. Shipping, arrives between Mon, May 16—Tue, May 24</h4>
                        <div className="delivery-list">
                            {[1, 2].map((i) => (
                                <div className="delivery-blk" key={i}>
                                    <Row>
                                        <Col md={6}><h6>James Smith</h6><p>12072 W McMillan Rd, Boise, IL - 87313</p></Col>
                                        <Col md={6}><input type="checkbox" className="del_chk" /></Col>
                                    </Row>
                                </div>
                            ))}
                        </div>

                        <h4 className="chk_h4">2. Shipping method</h4>
                        <div className="delivery-sm">
                            <h5>Available Shipping method</h5>
                            {["Free", "$12.00"].map((price, i) => (
                                <div className="delivery-grey" key={i}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="deliv-img">
                                                <img src={i === 0 ? "/assets/images/ico-ship.png" : "/assets/images/ico-fx.png"} alt="" />
                                            </div>
                                            <div className="deliv-text">
                                                <h6>Delivery by Driver</h6>
                                                <p>Delivery: 2-3 Working Days</p>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <label className="del-gr">{price} <input type="checkbox" className="del_chk" /></label>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>

                        <div className="btn-nex-prev">
                            <Button variant="secondary" onClick={() => setActiveStep("shipping")}>Back</Button>
                            <Button variant="primary" onClick={() => setActiveStep("payment")}>Continue</Button>
                        </div>
                    </div>
                )}

                {activeStep === "payment" && (
                    <div className="tab-pane active" id="payment">
                        <h4 className="chk_h4">3. Payment method</h4>
                        <div className="cart-picon">
                            <ul className="pays-list">
                                {["master", "paypal", "visa", "american"].map((card, i) => (
                                    <li key={i} className={i === 0 ? "pactive" : ""}>
                                        <img className={card} src={`/assets/images/${card}.png`} alt="" />
                                    </li>
                                ))}
                            </ul>
                            <Button className="btn btn-green">Add New</Button>
                        </div>
                        <div className="credit_card">
                            <Row>
                                <Col md={12} className="form-group">
                                    <label>Please select from saved cards</label>
                                    <select className="form-control">
                                        <option>Master</option>
                                        <option>Visa</option>
                                    </select>
                                </Col>
                                <Col md={6} className="form-group">
                                    <label>Cardholder Name</label>
                                    <input type="text" className="form-control" placeholder="Simon Lewis" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" className="form-control" placeholder="5884 6841 4444 3333" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <label>Expiry Date</label>
                                    <input type="text" className="form-control" placeholder="12/30" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <label>CVV</label>
                                    <input type="text" className="form-control" placeholder="123" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <label><input type="checkbox" /> Save my card for future use</label>
                                </Col>
                            </Row>
                            <div className="btn-nex-prev">
                                <Button variant="secondary" onClick={() => setActiveStep("delivery")}>Back</Button>
                                <Button variant="primary">Pay Now</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutSteps;
