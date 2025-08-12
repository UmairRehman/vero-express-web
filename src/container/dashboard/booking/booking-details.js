import React, { useState } from 'react';
import TrackingDetails from '../../../component/dashboard/backlog/traching-details'
import ItemImage from '../../../assets/images/prod3.jpg'
import ItemDetails from '../../../component/dashboard/backlog/item-details'
import DriverDetails from '../../../component/dashboard/backlog/driver-details'
import Recipient from '../../../component/dashboard/backlog/recipient'
import SenderDetails from '../../../component/dashboard/backlog/sender-details'
import CustomModal from '../../../component/shared/modal';

function BookingDetails() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div class="dash-9inn">

                <div class="dash-head">
                </div>

                <div class="view-wallet-pane">

                    <div class="wal_hd_bar">
                        {/* <a class="view_wall" href="javascript:;"><img src="<?php echo $siteurl; ?>assets/images/left-back.png" alt="" /> Order Details</a> */}
                        <h3>Order Details item Exchange</h3>

                        <div class="order-wp">
                            <a onClick={showModal} class="btn btn-green text-white" data-toggle="modal" href="#createdispute">Create Dispute</a>
                        </div>
                    </div>



                    <div class="trans_form wh-box box-shd">
                        <TrackingDetails />
                    </div>


                    <div class="trans_form wh-box box-shd">
                        <h5>Item Details</h5>
                        <ItemDetails />
                    </div>

                    <div class="trans_item_det wh-box">
                        <div class="cart-products">
                            <h5>Item Images</h5>
                            <div class="row mb-3">
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                                <div class="col-md-2 group-pics">
                                    <img class="gpics_img" src={ItemImage} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="trans_form wh-box box-shd">
                        <h5>Driver Details</h5>
                        <DriverDetails />
                    </div>


                    <div class="trans_form wh-box box-shd">
                        <h5>Recipient Details</h5>
                        <Recipient />
                    </div>

                    <div class="trans_form wh-box box-shd">
                        <h5>Sender Details</h5>
                        <SenderDetails />
                    </div>

                </div>
                <CustomModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} title={<h5>Create Dispute</h5>} >
                    <div class="credit_card mt-4">
                        <div class="row">
                            <div class="form-group col-md-12">
                                <div class="field-wrap">
                                    <i class="fa fas fa-home"></i>
                                    <select class="form-control" name="disputereason">
                                        <option>Dispute Reason</option>
                                        <option>Dispute Reason 2</option>
                                        <option>Dispute Reason 3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-md-12">
                                <label>Order ID</label>
                                <input type="text" name="cname" class="form-control" placeholder="Simon Lewis" />
                            </div>
                            <div class="form-group col-md-12">
                                <label>Comments</label>
                                <textarea name="comments" class="form-control" placeholder="Enter Comments..."></textarea>
                            </div>
                            <div class="form-mod-btn col-md-12">
                                <button onClick={handleOk} class="btn btn-primary"> Create Dispute</button>
                                <button onClick={handleCancel} class="btn btn-primary btnCancel">Cancel</button>
                            </div>
                        </div>
                    </div>
                </CustomModal>
            </div>
        </>
    )
}

export default BookingDetails