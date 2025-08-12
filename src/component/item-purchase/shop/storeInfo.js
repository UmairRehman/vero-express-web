import React from 'react'
import Avatar from '../../../assets/images/avatar.jpg'
import StoreBannerImage from '../../../assets/images/store-banner.jpg'

function StoreInfo() {
    return (
        <>
            <section class="strdef-banner">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="strdef-bann">
                                <img class="str-banner" src={StoreBannerImage} alt="" />
                                <div class="str-def-list">
                                    <div class="str-def-icon">
                                        <img src={Avatar} alt="" />
                                    </div>
                                    <div class="str-def-txt">
                                        <h4>Walmart</h4>
                                        <ul>
                                            <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i> <span>4.8 (133 Reviews)</span></li>
                                            <li><i class="fa fa-map"></i> <span>12072 W McMillan Rd, Boise, IL - 87313)</span></li>
                                            <li><i class="fa fa-date"></i> <span>Joined April 2021</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoreInfo