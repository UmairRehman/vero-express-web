import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const faqData = [
    {
        question: 'What areas does Vero1 cover for express delivery?',
        answer: 'Vero1 offers express delivery services in [specific regions or cities]. Check our service area map on the app or website for details.',
    },
    {
        question: 'Can I request a refund?',
        answer: 'Lorem ipsum..',
    },
    {
        question: 'What types of packages are eligible for express delivery?',
        answer: 'Lorem ipsum..',
    },
    {
        question: 'What should I do if my package is delayed or lost?',
        answer: 'Lorem ipsum..',
    },
    {
        question: 'What is the typical delivery time for express services?',
        answer: 'Lorem ipsum..',
    },
    {
        question: 'How are delivery fees calculated?',
        answer: 'Lorem ipsum..',
    },
    {
        question: 'How can I contact Vero1 customer support?',
        answer: 'Lorem ipsum..',
    },
];

const DeliveryPoliciesSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-sect delivery_pol">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-md-12 head_style center">
                        <h5 className="text-orange">Policies</h5>
                        <h2 className="fw-bold">Delivery Policies</h2>
                        <p>
                            Everything you need to know right here at your fingertips. Ask questions, browse <br />
                            around for answers, or submit your feature requests.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {faqData.map((faq, idx) => (
                        <div className="col-md-6 mb-3" key={idx}>
                            <div className={`faq-card ${activeIndex === idx ? 'active' : ''}`}>
                                <div className="faq-question" onClick={() => toggleFAQ(idx)}>
                                    <span>{faq.question}</span>
                                    <span>{activeIndex === idx ? '−' : '+'}</span>
                                </div>
                                {activeIndex === idx && <div className="faq-answer">{faq.answer}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeliveryPoliciesSection;
