import React, { useState } from "react";
import logo from "../../../assets/images/logo-b.svg";
import signinImg from "../../../assets/images/signin.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../../../component/header";
import { createOtp } from "../../../services/auth";
const PhoneLogin = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("");
    const [touched, setTouched] = useState(false);

    const isValidPhone = (num) => {
        const digits = num.replace(/\D/g, "");
        return digits.length >= 9 && digits.length <= 14;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched(true);
        if (isValidPhone(phone)) {
            try {
                const { data: res } = await createOtp({ phoneNo: phone });
                console.log(res.success, "res   from createOtp");
                if (res.success) {
                    navigate("/otp", { state: { phone } });
                    // setPayments(data)
                    // dispatch(AddPayment(data));
                }
            } catch (error) {
                console.log(error);
            }
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
                                <img src={signinImg} alt="Sign In" />
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-md-5">
                            <div className="form-inn-sec">
                                <div className="form-head">
                                    <img className="logo-b" src={logo} alt="Vero1 Express" />
                                    <h4>Welcome to Vero1 Express! 👋</h4>
                                    <p>Please sign in to your account and start the adventure</p>
                                </div>

                                <div className="form-area">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <div className="field-wrap">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="+1 (908) 1234 567"
                                                    id="fname"
                                                    value={phone}
                                                    onChange={e => setPhone(e.target.value)}
                                                    onBlur={() => setTouched(true)}
                                                />
                                                <i className="fa fa-mobile"></i>
                                            </div>
                                        </div>

                                        <div className="form-text text-center">
                                            {touched && !isValidPhone(phone) && (
                                                <div className="text-danger" style={{ fontSize: '0.9em' }}>
                                                    Phone number is required and must be 9-14 digits.
                                                </div>
                                            )}
                                            <button type="submit" className="btn btn-green mt-2" disabled={!isValidPhone(phone)}>
                                                Continue
                                            </button>

                                            <p className="paras">
                                                Don’t have an account? <a onClick={() => navigate("/signup")}>Create an account</a>
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

export default PhoneLogin;
