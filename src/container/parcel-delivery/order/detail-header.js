import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Step1Image from '../../../assets/images/item-step1.png';
import Step1Image2 from '../../../assets/images/sign-step1.png';
import Step2Image from '../../../assets/images/sign-step2.png';
import Step2Image2 from '../../../assets/images/sinup-step2.jpg';
import Step3Image from '../../../assets/images/sign-step3.png';
import Step3Image2 from '../../../assets/images/sinup-thanks.jpg';

const steps = [
    {
        key: 'step1',
        title: 'Item Details',
        subtitle: 'Item Details',
        image: Step1Image,
        bgImage: Step1Image2,
    },
    {
        key: 'step2',
        title: 'Delivery',
        subtitle: 'Delivery Method',
        image: Step2Image,
        bgImage: Step2Image2,
    }
    // {
    //     key: 'success',
    //     title: 'Payment',
    //     subtitle: 'Payment method',
    //     image: Step3Image,
    //     bgImage: Step3Image2,
    // },
];

const DetailHeader = ({ handleClick, activeStep }) => {

    return (
        <Col md={8}>
            <div className="sign-form custom-nav">
                <ul className="nav nav-tabs d-flex align-items-center">
                    {steps.map((step, idx) => (
                        <li key={step.key} className={activeStep === step.key ? 'active' : ''}>
                            <a onClick={() => handleClick(step)} className={activeStep === step.key ? 'active' : ''}>
                                <span className="sign-ico">
                                    <img src={step.image} alt="" />
                                </span>
                                <b>{step.title}</b>
                                <small>{step.subtitle}</small>
                            </a>
                            {idx < steps.length - 1 && <i className="fas fa-chevron-right"></i>}
                        </li>
                    ))}
                </ul>
            </div>
        </Col>
    );
};

export default DetailHeader;
