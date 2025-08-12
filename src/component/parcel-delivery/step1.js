import React from 'react'

function ParcelStep1() {
    return (
        <>
            <div class="ttb-form">
                <div class="row">
                    <div class="col-md-12">
                        <h3>Personal Information <span>Enter Your Personal Details</span></h3>
                    </div>
                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Parcel Type</label>
                        <select class="form-control">
                            <option>Please Select</option>
                            <option>Male</option>
                            <option>female</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Item Quantity</label>
                        <select class="form-control">
                            <option>Please Select</option>
                            <option>Quantity 1</option>
                            <option>Quantity 2</option>
                        </select>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Parcel Description</label>
                        <textarea type="text" name="fname" class="form-control" placeholder="Enter here..."></textarea>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Upload Images</label>
                        <div class="upload-wrap">
                            <input type="text" name="fname" class="form-control" placeholder="Upload Images" />
                        </div>
                        <div class="upload-image">
                            <img src="<?php echo $siteurl; ?>assets/images/upload-img1.jpg" alt="" />
                            <img src="<?php echo $siteurl; ?>assets/images/upload-img2.jpg" alt="" />
                            <img src="<?php echo $siteurl; ?>assets/images/upload-img3.jpg" alt="" />
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-12">
                        <label>Special Instructions</label>
                        <textarea type="text" name="fname" class="form-control" placeholder="Enter here..."></textarea>
                    </div>

                    <div class="form-group col-md-12">
                        <label>Delivery Preference</label>
                        <textarea type="text" name="fname" class="form-control" placeholder="Enter here..."></textarea>
                    </div>

                </div>
            </div>
            <div class="btn-nex-prev full">
                <a class="btn btn-grey btnNext" ><i class="fas fa-solid fa-arrow-left"></i> Previous </a>
                <a class="btn btn-primary btnPrevious">Continue</a>
            </div>
        </>
    )
}

export default ParcelStep1