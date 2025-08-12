import React from 'react'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CheckoutSteps from '../../../component/item-purchase/checkout/step'
import CheckoutPricing from '../../../component/item-purchase/checkout/checkout-pricing'

function Checkout() {
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <section class="checkout-mg">
                <div class="container">
                    <div class="row row-checkout">
                        <div className='col-md-8'>
                            <CheckoutSteps />
                        </div>
                        <div className='col-md-4'>
                            <CheckoutPricing subtotal={100} delivery={10} itemCount={3} discount={10} />
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

export default Checkout