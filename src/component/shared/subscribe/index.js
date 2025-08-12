import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="news-subs">
                        <div className="row">
                            <div className="col-md-6 news-left">
                                <h3>Subscribe to Newsletter</h3>
                                <p>
                                    Stay updated with the Vero1 newsletter! Discover the latest <br />
                                    in our delivery services and exclusive offers.
                                </p>
                            </div>
                            <div className="col-md-6 news-right">
                                <form className="form-news">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address..."
                                        name="news"
                                        className="news-s"
                                    />
                                    <button type="submit" className="news-btn">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
