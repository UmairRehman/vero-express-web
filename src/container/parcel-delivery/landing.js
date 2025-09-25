import React from 'react'
import Header from '../../component/header';
import SubHeader from '../../component/shared/subHeader';
import ParcelBanner from '../../component/parcel-exchange-return/landing';
import WhyChooseUs from '../../component/parcel-exchange-return/why-choose-us';
import Policies from '../../component/parcel-exchange-return/policies';
import BestSeller from '../../component/item-purchase/shop/bestSeller';
import CTA from '../../component/cta';
import Testimonials from '../../component/shared/testiminial';
import DownloadApp from '../../component/shared/downapp';
import FaqSection from '../../component/shared/faq';
import Footer from '../../component/footer';

function Landing() {
    return (
        <>
            <Header />
            <SubHeader />
            <ParcelBanner />
            <WhyChooseUs />
            <Policies />
            <BestSeller />
            <CTA />
            <Testimonials />
            <DownloadApp />
            <FaqSection />
            <Footer />
        </>

    )
}

export default Landing