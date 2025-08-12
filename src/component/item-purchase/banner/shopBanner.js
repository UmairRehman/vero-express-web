import React from 'react'
import BannerImage from '../../../assets/images/banner.jpg'; // Adjust the path as necessary

function ShopBanner() {
    return (
        <section class="astore-banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <img class="ast-banner" src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopBanner;