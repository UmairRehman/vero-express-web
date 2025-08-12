import React from 'react'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import CartProductDetails from '../../../component/item-purchase/cart/cart-product-details'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CartSummaryMain from '../../../component/item-purchase/cart/cart-summary'

function CartDetails() {
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <section class="product-banner">
                <div class="container">
                    <div class="row row-cart">

                        <div className="col-md-8">
                            <CartProductDetails />
                        </div>
                        <div className="col-md-4">
                            <CartSummaryMain />
                        </div>
                    </div>
                </div>
            </section>
            <BestSeller />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default CartDetails