import React from 'react';
import testImg from '../../../assets/images/test-ico.jpg';


const testimonialsData = [
    {
        name: 'Jessica Strike',
        role: 'CEO at People Power',
        feedback:
            "Vero1's drone delivery is incredibly fast and reliable. Our packages always arrive on time. Fantastic service!",
        img: testImg,
    },
    {
        name: 'David Nyoman',
        role: 'CEO at People Power',
        feedback:
            "Vero1's drone delivery is incredibly fast and reliable. Our packages always arrive on time. Fantastic service!",
        img: testImg,
    },
    {
        name: 'Amanda Morris',
        role: 'CEO at People Power',
        feedback:
            "Vero1's drone delivery is incredibly fast and reliable. Our packages always arrive on time. Fantastic service!",
        img: testImg,
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 head_style center">
                        <h5>Testimonials</h5>
                        <h2>Love of Our Customers</h2>
                        <p>
                            Read why customers rave about Vero1's drone delivery: unmatched speed, reliability, <br />
                            and efficiency that transform delivery experiences.
                        </p>
                    </div>

                    <div className="col-md-12">
                        <div className="test-slider">
                            {testimonialsData.map((testimonial, index) => (
                                <div className="test-item" key={index}>
                                    <div className="test-thumb">
                                        <img src={testimonial.img} alt={testimonial.name} />
                                        <h5>
                                            <strong>{testimonial.name}</strong> <span>{testimonial.role}</span>
                                        </h5>
                                    </div>
                                    <p>{testimonial.feedback}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
