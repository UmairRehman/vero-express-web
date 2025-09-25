import React, { useState } from 'react'
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import DetailHeader from './detail-header'
import ParcelStep1 from '../../../component/parcel-exchange-return/step1'
import ParcelStep2 from '../../../component/parcel-exchange-return/step2'
import ParcelStep3 from '../../../component/parcel-exchange-return/step3'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'

function DeliveryOrder() {

    const [activeStep, setActiveStep] = useState('step1');
    const [formData, setFormData] = useState(null);

    const handleClick = (step) => {
        console.log('Step clicked:', step);
        setActiveStep(step.key);
    };

    const handleStep1Submit = (data) => {
        console.log('Step 1 form submitted:', data);
        setFormData(data);
        setActiveStep('step2');
    };

    const handleStep2Submit = (data) => {
        console.log('Step 2 form submitted:', data);
        // Combine step 1 and step 2 data
        const combinedData = {
            // ...formData,
            ...data
        };
        console.log('Combined form data:', combinedData);
        // setActiveStep('success');
    };

    const goToStep1 = () => {
        setActiveStep('step1');
    };

    const goToStep2 = () => {
        setActiveStep('step2');
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
                            {activeStep === 'step1' && <ParcelStep1 onSubmit={handleStep1Submit} />}
                            {activeStep === 'step2' && <ParcelStep2 formData={formData} onSubmit={handleStep2Submit} onBack={goToStep1} />}
                            {activeStep === 'success' && <ParcelStep3 formData={formData} onBack={goToStep2} />}
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