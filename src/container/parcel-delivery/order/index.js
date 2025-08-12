import React, { useState } from 'react'
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import DetailHeader from './detail-header'
import ParcelStep1 from '../../../component/parcel-delivery/step1'
import ParcelStep2 from '../../../component/parcel-delivery/step2'
import ParcelStep3 from '../../../component/parcel-delivery/step3'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'

function DeliveryOrder() {

    const [activeStep, setActiveStep] = useState('step1');

    const handleClick = (step) => {
        console.log('Step clicked:', step);
        setActiveStep(step.key);
    };

    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />

            <section class="addfp-section">
                <div class="container">
                    <div className='row'>
                        <DetailHeader handleClick={handleClick} activeStep={activeStep} />
                        <div class="col-md-12">
                            {activeStep === 'step1' && <ParcelStep1 />}
                            {activeStep === 'step2' && <ParcelStep2 />}
                            {activeStep === 'success' && <ParcelStep3 />}
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

export default DeliveryOrder