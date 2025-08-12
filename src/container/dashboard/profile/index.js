import React from 'react'

function Profile() {
    return (
        <>
            <div class="dash-9inn">

                <div class="dash-head">
                    <h1>Edit Profile</h1>
                </div>
                <div class="profile_form wh-box edit_prof">
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">First Name</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Simon" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Last Name</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Lewis" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">Gender</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Email Address</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Simon.lewis@gmail.com" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Phone Number</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="+1 (908) 1234 567" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Address</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="SanFrancisco, United States" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">Country</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>UAE</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="password">State</label>
                                    <div class="form-wrap">
                                        <select class="form-control">
                                            <option>il</option>
                                            <option>ck</option>
                                            <option>la</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">City</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="Boise" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label form="fname">Zip Code</label>
                                    <div class="form-wrap">
                                        <input type="text" class="form-control" value="" placeholder="123456" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-button  text-center">
                                    <button class="btn btn-blue btn-lg">Update My Profile</button>
                                    <button class="btn btn-transparent btn-lg">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Profile