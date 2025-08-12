import React from 'react';
import Header from '../../../component/header';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <section className="form-section login-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-area">
                                <div className="form-head">
                                    <h1>Welcome</h1>
                                </div>
                                <div className="form-soc">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email address:</label>
                                            <div className="field-wrap">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    id="email"
                                                />
                                                <i className="fa fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd">Password:</label>
                                            <div className="field-wrap">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    id="pwd"
                                                />
                                                <i className="fa fa-eye"></i>
                                            </div>
                                        </div>
                                        <div className="form-group forgot-r">
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Sign In
                                        </button>
                                        <p className="paras">
                                            Need to create an Account? <a onClick={() => navigate("/signup")}>Sign Up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="formrimg">
                                <h3>
                                    Elevate Every Step of Your <br /> Journey with Unparalleled <br /> Support
                                </h3>
                                <img src="../../../../assets/images/login1.jpg" alt="Login Visual" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default LoginPage;
