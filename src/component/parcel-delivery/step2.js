import React from 'react'

function ParcelStep2() {
    return (
        <>
            <div class="ttb-form">
                <div class="row">
                    <div class="col-md-12">
                        <h4>Recipient Information </h4>
                    </div>
                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Select Store</label>
                        <div class="field-wrap">
                            <i class="fa fa-solid fa-globe"></i>
                            <select class="form-control" name="country">
                                <option>Select Store</option>
                                <option>Select Store Emirate</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Recipient Name</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-home"></i>
                            <input type="text" name="fname" class="form-control" placeholder="Simon" />
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Contact No.</label>
                        <div class="field-wrap">
                            <i class="fa fa-solid fa-globe"></i>
                            <input type="text" name="fname" class="form-control" placeholder="Enter" />
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Address</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-home"></i>
                            <select class="form-control" name="country">
                                <option>Select Address</option>
                                <option>Address 1</option>
                                <option>Address 2</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="row mt-5">
                    <div class="col-md-12">
                        <h4>Sender Information</h4>
                    </div>
                </div>


                <div class="row">

                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-city"></i>
                            <input type="text" class="form-control" name="state" placeholder="Enter" />
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-file-archive"></i>
                            <input type="text" class="form-control" name="state" placeholder="Enter" />
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Contact No.</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-city"></i>
                            <input type="text" class="form-control" name="state" placeholder="Enter" />
                        </div>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Address</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-file-archive"></i>
                            <input type="text" class="form-control" name="state" placeholder="Enter Address" />
                        </div>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>Country.</label>
                        <select class="form-control" name="country">
                            <option>Please Select</option>
                            <option>Address 1</option>
                            <option>Address 2</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label>State.</label>
                        <select class="form-control" name="country">
                            <option>Please Select</option>
                            <option>State 1</option>
                            <option>State 2</option>
                        </select>
                    </div>

                </div>

                <div class="row">

                    <div class="form-group col-md-6">
                        <label>City.</label>
                        <select class="form-control" name="country">
                            <option>Please Select</option>
                            <option>State 1</option>
                            <option>State 2</option>
                        </select>
                    </div>

                    <div class="form-group col-md-6">
                        <label>Zip Code</label>
                        <div class="field-wrap">
                            <i class="fa fas fa-file-archive"></i>
                            <input type="text" class="form-control" name="ZipCode" placeholder="Zip Code" />
                        </div>
                    </div>

                </div>

                <div class="row mt-3">
                    <div class="col-md-12">
                        <h4 class="chk_h4">Delivery method</h4>
                    </div>

                    <div class="col-md-12">
                        <h5>Available Shipping method</h5>

                        <div class="parcel-mode">
                            <div class="parmode">
                                <div class="parmode-thumb">
                                    <img src="<?php echo $siteurl; ?>assets/images/asm-ico1.png" alt="" />
                                </div>
                                <div class="parmode-txt">
                                    <h6>Delivery by Driver <span>Delivery: 2-3 Working Days</span></h6>
                                    <label>Free <input type="checkbox" name="free" value="" /></label>
                                </div>
                            </div>
                            <div class="parmode">
                                <div class="parmode-thumb">
                                    <img src="<?php echo $siteurl; ?>assets/images/asm-ico2.png" alt="" />
                                </div>
                                <div class="parmode-txt">
                                    <h6>Delivery by Driver <span>Delivery: 2-3 Working Days</span></h6>
                                    <label>$12.00 <input type="checkbox" name="free" value="" /></label>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-12 mt-5">

                        <h4 class="chk_h4">Order Information</h4>

                        <h6>Damage Policy</h6>
                        <p>This is our example return policy which is everything you need to know about our returns.</p>
                        <label><input type="checkbox" name="free" value="" /> Save my card for future use</label>
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

export default ParcelStep2;