import React from 'react'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import ShopBanner from '../../../component/item-purchase/banner/shopBanner'
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Departments from '../../../component/item-purchase/department'
import TopStores from '../../../component/item-purchase/stores'
import CTA from '../../../component/cta'
import Testimonials from '../../../component/shared/testiminial'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'

function ItemExplore() {
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <ShopBanner />
            <section class="dep-service" >
                <div class="container">
                    {/* <Departments /> */}
                    <TopStores />
                </div>
            </section>
            <CTA />
            <Testimonials />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default ItemExplore