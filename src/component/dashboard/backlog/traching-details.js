import React from 'react'

function TrackingDetails() {
    return (
        <>
            <h5>Transaction Details</h5>

            <form action="#">

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Transaction ID</label>
                        <input type="text" id="" class="form-control" placeholder="P12345" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Order Type</label>
                        <input type="text" id="" class="form-control" placeholder="Item Purchase" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Order ID</label>
                        <input type="text" id="" class="form-control" placeholder="12346qqw" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Credit/Debit</label>
                        <input type="text" id="" class="form-control" placeholder="Debit" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Transaction Date</label>
                        <input type="text" id="" class="form-control" placeholder="11/30/2022 at 11:00 am GMT" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Payment by</label>
                        <input type="text" id="" class="form-control" placeholder="Card" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Amount</label>
                        <input type="text" id="" class="form-control" placeholder="$1200.00" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Items Amount</label>
                        <input type="text" id="" class="form-control" placeholder="$1100.00" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Delivery Fees</label>
                        <input type="text" id="" class="form-control" placeholder="$100.00" />
                    </div>
                    <div class="form-group col-md-6">
                    </div>
                </div>

            </form>
        </>
    )
}

export default TrackingDetails