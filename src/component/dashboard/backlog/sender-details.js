import React from 'react'

function SenderDetails() {
    return (
        <>

            <form action="#">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">First Name</label>
                        <input type="text" id="" class="form-control" placeholder="James" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Last Name</label>
                        <input type="text" id="" class="form-control" placeholder="Smith" />
                    </div>
                </div>

                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="">Contact Number</label>
                        <input type="text" id="" class="form-control" placeholder="+1 (908) 1234 567" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="">Pickup Address</label>
                        <input type="text" id="" class="form-control" placeholder="12072 W McMillan Rd, Boise, IL - 87313" />
                    </div>
                </div>

            </form>
        </>
    )
}

export default SenderDetails