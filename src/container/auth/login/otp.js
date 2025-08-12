import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import otpImage from "../../../assets/images/otp.jpg";
import logo from "../../../assets/images/logo-b.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../../component/header";
import CustomInput from '../../../component/shared/otpInput';
import { verifyOtp } from '../../../services/auth';

const OtpVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [otp, setOtp] = useState('');
    const phone = location.state?.phone;
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!phone) {
            navigate("/login");
        }
    }, [phone, navigate]);

    // Mask phone number: show first 3, then ****, then last digit
    const maskPhone = (num) => {
        if (!num) return '';
        // Remove non-digits, keep +
        const digits = num.replace(/[^\d+]/g, '');
        if (digits.length < 5) return digits;
        return digits.slice(0, 3) + '****' + digits.slice(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!otp || otp.length !== 6) {
            setError("OTP is required and must be 6 digits.");
            return;
        }
        setError("");
        setLoading(true);

        try {
            const { data: res } = await verifyOtp({
                phoneNo: phone,
                code: otp
            });

            if (res.success) {
                navigate("/");
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <section className="form-section">
                <div className="container-fluid">
                    <div className="row">
                        {/* Left Image */}
                        <div className="col-md-7">
                            <div className="formrimg">
                                <img src={otpImage} alt="OTP Verification" />
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-md-5">
                            <div className="form-inn-sec">
                                <div className="form-head">
                                    <img className="logo-b" src={logo} alt="Logo" />
                                    <h4>OTP Verification</h4>
                                    <p>
                                        Please enter the 6-digit code sent on your phone number
                                        <br />
                                        {maskPhone(phone)}{" "}
                                        <a href="#">Change Number</a>
                                    </p>
                                </div>

                                <div className="form-area">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className='d-flex justify-content-center'>Type your 6 digit security code</label>

                                            <div className="otp-group">
                                                {/* {Array.from({ length: 6 }).map((_, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        maxLength="1"
                                                        className="form-control"
                                                    />
                                                ))} */}
                                                <CustomInput otp={otp} setOtp={setOtp} />
                                            </div>
                                        </div>
                                        {error && (
                                            <div className="text-danger text-center" style={{ fontSize: '0.9em' }}>
                                                {error}
                                            </div>
                                        )}
                                        <div className="form-text text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-green"
                                                disabled={loading}
                                            >
                                                {loading ? "Verifying..." : "Verify"}
                                            </button>
                                        </div>

                                        <div className="form-text text-center">
                                            <p className="paras">
                                                Didn't get the code? <a href="#">Resend</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                <div className="form-or">
                                    <span>OR</span>
                                </div>

                                <div className="form-soc">
                                    <ul className="social form-soci">
                                        <li>
                                            <a className="fb" href="#">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tw" href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="link" href="#">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OtpVerification;
