import React from 'react'

function Rating() {
    return (
        <div className="track-pbx track-review">
            <h5>Rate Order</h5>
            <div className="track-star">
                <i className="fa fa-star star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>

            <form className="reveiw-submit">
                <div className="form-group">
                    <label>Write a Review</label>
                    <textarea className="form-control" placeholder="Enter here..."></textarea>
                    <button className="btn submit-btn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Rating