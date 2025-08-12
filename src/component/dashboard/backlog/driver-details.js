import React from 'react'
import TempImage from '../../../assets/images/prod3.jpg'
function DriverDetails() {
    return (
        <>
            <form action="#">

                <div class="row mb-3 mt-3">
                    <div class="col-md-2 group-pics">
                        <img class="gpics_img" src={TempImage} alt="" />
                    </div>

                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Driver Name</label>
                        <input type="text" id="" class="form-control" placeholder="David Hunt" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Driver Phone Number</label>
                        <input type="text" id="" class="form-control" placeholder="+1 (908) 1234 567" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Car Make</label>
                        <input type="text" id="" class="form-control" placeholder="Toyota" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Car Model</label>
                        <input type="text" id="" class="form-control" placeholder="Corolla" />
                    </div>
                </div>

            </form>
        </>
    )
}

export default DriverDetails