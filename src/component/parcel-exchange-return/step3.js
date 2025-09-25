import React from 'react';
import MasterImage from "../../assets/images/master.png";
import PaypalImage from "../../assets/images/paypal.png";
import VisaImage from "../../assets/images/visa.png";
import AmericanImage from "../../assets/images/american.png";
import AlterImage1 from "../../assets/images/alter-img-1.jpg";
import AlterImage2 from "../../assets/images/alter-img-2.jpg";
import AlterImage3 from "../../assets/images/alter-img-3.jpg";
import AlterImage4 from "../../assets/images/alter-img-4.jpg";




export default function ParcelStep3() {
    return (
        <>
            <div class="aps-step3">
                <div class="row">
                    <div class="col-md-8">

                        <h5>Recipient Details</h5>

                        <div class="delivery-list">

                            <div class="delivery-blk">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>Walmart</h6>
                                        <p>Delivery Address: 12072 W McMillan Rd, Boise, IL - 87313</p>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="checkbox" class="del_chk" placeholder="" />
                                    </div>
                                </div>
                            </div>


                            <h5>Sender Details</h5>

                            <div class="delivery-blk">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>Walmart</h6>
                                        <p>Delivery Address: 12072 W McMillan Rd, Boise, IL - 87313</p>
                                    </div>
                                    <div class="col-md-6">
                                        <a class="v_details" href="#">View details</a>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <h4 class="chk_h4"> Payment method</h4>

                        <div class="cart-picon">

                            <ul class="pays-list">
                                <li class="pactive"><img class="master" src={MasterImage} alt="" /></li>
                                <li><img class="paypal" src={PaypalImage} alt="" /></li>
                                <li><img class="visa" src={VisaImage} alt="" /></li>
                                <li><img class="american" src={AmericanImage} alt="" /></li>
                            </ul>

                            <a class="btn btn-green" href="javascript:;">Add New</a>
                        </div>

                        <div class="credit_card">

                            <div class="row">

                                <div class="form-group col-md-12">
                                    <label>Please select from saved cards</label>
                                    <div class="field-wrap">
                                        <i class="fa fas fa-home"></i>
                                        <select class="form-control" name="state">
                                            <option>Master</option>
                                            <option>Visa</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Cardholder Name</label>
                                    <div class="field-wrap">
                                        <i class="fa fa-regular fa-user"></i>
                                        <input type="text" name="cname" class="form-control" placeholder="Simon Lewis" />
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Card Number</label>
                                    <div class="field-wrap">
                                        <i class="fa fa-regular fa-wallet"></i>
                                        <input type="text" name="cnumber" class="form-control" placeholder="5884 6841 4444 3333" />
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label>Expiry Date</label>
                                    <div class="field-wrap">
                                        <i class="fa fa-regular fa-user"></i>
                                        <input type="text" name="expiredate" class="form-control" placeholder="12/30" />
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label>CVV</label>
                                    <div class="field-wrap">
                                        <i class="fa fa-regular fa-wallet"></i>
                                        <input type="text" name="cvv" class="form-control" placeholder="123" />
                                    </div>
                                </div>

                                <div class="form-group col-md-6">
                                    <label class="savemycard"><input type="checkbox" name="savemycard" class="form-control" /> Save my card for future use</label>
                                </div>

                            </div>

                            <div class="btn-nex-prev">
                                <a class="btn btn-primary btnNext"><i class="fa fa-angle-left" aria-hidden="true"></i> Close</a>
                                <a class="btn btn-primary btnPrevious" data-toggle="modal" data-target="#successpopup">Pay Now</a>
                            </div>


                        </div>

                    </div>


                    <div class="col-md-4">

                        <div class="cart-pbx">
                            <h4>Order Summary</h4>

                            <div class="cart-uls">
                                <ul>
                                    <li><label>Type</label> <strong>Clothing</strong></li>
                                    <li><label>Quantity</label> <strong>2</strong></li>
                                    <li><label>Estimated Tax</label> <strong>$10.00</strong></li>
                                    <li class="total-images">
                                        <img width={100} height={100} src={AlterImage1} alt="" />
                                        <img width={100} height={100} src={AlterImage2} alt="" />
                                        <img width={100} height={100} src={AlterImage3} alt="" />
                                        {/* <img width={100} height={100} src={AlterImage4} alt="" /> */}
                                    </li>
                                    <li class="total-charges">
                                        <label><b>Total Charges </b>(Delivery by Driver)</label>
                                        <strong>$10.00</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
