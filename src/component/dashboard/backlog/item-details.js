import React from 'react'

function ItemDetails() {
    return (
        <>
            <form action="#">

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Item Exchange Reason</label>
                        <input type="text" id="" class="form-control" placeholder="Size Issue" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Item Quantity</label>
                        <input type="text" id="" class="form-control" placeholder="Item Purchase" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-12">
                        <label for="">Item Exchange Description</label>
                        <textarea class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="">Special Instructions</label>
                        <textarea class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="">Delivery Preference</label>
                        <textarea class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</textarea>
                    </div>
                </div>


            </form>
        </>
    )
}

export default ItemDetails