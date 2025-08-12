import React, { useState } from 'react';

const faqs = [
  {
    question: 'What areas does Vero1 cover for express delivery?',
    answer:
      'Vero1 offers express delivery services in [specific regions or cities]. Check our service area map on the app or website for details.',
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

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-sect">
      <div className="container">
        <div className="row">
          <div className="col-md-12 head_style center">
            <h5>Questions</h5>
            <h2>Frequently Asked Questions</h2>
            <p>
              Everything you need to know right here at your fingertips. Ask questions, browse <br />
              around for answers, or submit your feature requests.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="faqaccordion">
              {faqs.map((faq, index) => (
                <div className="card" key={index}>
                  <div className="card-header">
                    <button
                      className={`btn-f ${activeIndex === index ? '' : 'collapsed'}`}
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                    </button>
                  </div>
                  {activeIndex === index && (
                    <div className="collapse show">
                      <div className="card-body">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
