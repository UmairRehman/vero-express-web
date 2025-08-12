import React from 'react'
import TempImage from "../../../assets/images/prod1.jpg"
function CompareComponent() {
    return (
        <section className="comparpro">
            <div className="container">
                <div className="row row-compare">
                    <div className="col-md-4">
                        <h5>Selected Item</h5>
                        <div className="compare-item">
                            <a className="comp_img" href="#">
                                <img src={TempImage} alt="Selected Product" />
                            </a>
                            <a className="comp_cat" href="#">Women-Fashion</a>
                            <a className="comp_title" href="#">Ladies Purse Bag - Original Leather</a>

                            <div className="prod-star">
                                {[...Array(5)].map((_, i) => (
                                    <i className="fa fa-star" key={i}></i>
                                ))}
                                <span>4.8 (20 reviews)</span>
                            </div>

                            <ul className="comp-select">
                                <li>
                                    <label>Was:</label>
                                    <span><strike>USD 430.00</strike> <i>Inclusive of VAT</i></span>
                                </li>
                                <li>
                                    <label>Now:</label>
                                    <h6>USD 230.00</h6>
                                </li>
                                <li>
                                    <label>Saving:</label>
                                    <span>USD 230.00 <b>50%</b></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Second Column - Search Input */}
                    <div className="col-md-4">
                        <h5>Selected Item</h5>
                        <div className="compare-item form-group">
                            <label>Search Item</label>
                            <div className="cs_search_bar">
                                <input type="text" className="form-control" placeholder="Search here..." />
                            </div>
                        </div>
                    </div>

                    {/* Third Column - Search Input */}
                    <div className="col-md-4">
                        <h5>Selected Item</h5>
                        <div className="compare-item form-group">
                            <label>Search Item</label>
                            <div className="cs_search_bar">
                                <input type="text" className="form-control" placeholder="Search here..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CompareComponent