import React from 'react'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CompareComponent from '../../../component/item-purchase/compare'

function Compare() {
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <CompareComponent />
            <BestSeller />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default Compare