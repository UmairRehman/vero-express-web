import React, { useState } from "react";
import Header from "../../../component/header";
import Image1 from "../../../assets/images/sign-step1.png"
import Image2 from "../../../assets/images/sign-step2.png"
import Image3 from "../../../assets/images/sign-step3.png"
import LogoB from "../../../assets/images/logo-b.svg"
import SinupStep1 from "../../../assets/images/sinup-step1.jpg"
import Success from "../../../assets/images/success.gif"
import PersonalDetails from "../../../component/purchase/auth/signup/personalDetails";
import Address from "../../../component/purchase/auth/signup/address";
import { Form, message } from 'antd';

const FormSection = () => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [personalData, setPersonalData] = useState({});
    const [addressData, setAddressData] = useState({});
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabChange = async (tabId) => {
        if (tabId === "tab2") {
            try {
                const values = await form1.validateFields();
                setPersonalData(values);
                setActiveTab(tabId);
            } catch {
                message.error("Please complete all required fields in Personal Details.");
            }
        } else if (tabId === "tab3") {
            try {
                const values = await form2.validateFields();
                setAddressData(values);
                setActiveTab(tabId);
                // Console all data on step 2 submit
                console.log({ ...personalData, ...values });
            } catch {
                message.error("Please complete all required fields in Address.");
            }
        } else {
            setActiveTab(tabId);
        }
    };

    return (
        <>
            <Header />
            <section className="form-section" id="formclass">
                <div className="container-fluid">
                    <div className="row">
                        {/* Left Image */}
                        <div className="col-md-5">
                            <div className="formrimg">
                                <img
                                    id="pic_update"
                                    src={SinupStep1}
                                    alt=""
                                />
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="col-md-7">
                            <div className="form-head">
                                <img
                                    className="logo-b"
                                    src={LogoB}
                                    alt=""
                                />
                                <h4>Welcome to Vero1 Express! 👋</h4>
                                <p>Please sign in to your account and start the adventure</p>
                            </div>

                            {/* Tabs */}
                            <div className="sign-form custom-nav">
                                <ul className="nav nav-tabs">
                                    <li
                                        className={activeTab === "tab1" ? "active" : ""}
                                        onClick={() => handleTabChange("tab1")}
                                    >
                                        <a>
                                            <span className="sign-ico">
                                                <img
                                                    src={Image1}
                                                    alt=""
                                                />
                                            </span>
                                            <b>Personal</b>
                                            <small>Personal Details</small>
                                        </a>
                                        <i className="fas fa-chevron-right"></i>
                                    </li>
                                    <li
                                        className={activeTab === "tab2" ? "active" : ""}
                                        onClick={() => handleTabChange("tab2")}
                                    >
                                        <a>
                                            <span className="sign-ico">
                                                <img
                                                    alt=""
                                                    src={Image2}

                                                />
                                            </span>
                                            <b>Address</b>
                                            <small>Address Information</small>
                                        </a>
                                        <i className="fas fa-chevron-right"></i>
                                    </li>
                                    <li
                                        className={activeTab === "tab3" ? "active" : ""}
                                        onClick={() => handleTabChange("tab3")}
                                    >
                                        <a>
                                            <span className="sign-ico">
                                                <img
                                                    alt=""
                                                    src={Image3}
                                                />
                                            </span>
                                            <b>Verification</b>
                                            <small>Verify your Account</small>
                                        </a>
                                    </li>
                                </ul>

                                {/* Tab Content */}
                                <div className="tab-content">
                                    {activeTab === "tab1" && (
                                        <div className="tab-pane active" id="tab1">
                                            <Form form={form1} layout="vertical" initialValues={personalData} onFinish={() => handleTabChange("tab2")}>
                                                <PersonalDetails values={personalData} onChange={setPersonalData} />
                                                <div className="btn-nex-prev full">
                                                    <button type="button" className="btn btn-green btnNext" onClick={() => form1.submit()}>
                                                        Next <i className="fas fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                    {activeTab === "tab2" && (
                                        <div className="tab-pane active" id="tab2">
                                            <Form form={form2} layout="vertical" initialValues={addressData} onFinish={() => handleTabChange("tab3")}>
                                                <Address values={addressData} onChange={setAddressData} />
                                                <div className="btn-nex-prev full">
                                                    <button type="button" className="btn btn-grey btnNext" onClick={() => setActiveTab("tab1")}> <i className="fas fa-solid fa-arrow-left"></i> Previous </button>
                                                    <button type="button" className="btn btn-green btnNext" onClick={() => form2.submit()}>
                                                        Submit <i className="fas fa-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </Form>
                                        </div>
                                    )}
                                    {activeTab === "tab3" && (
                                        <div className="tab-pane active" id="tab3">
                                            <div className="success-area">
                                                <img src={Success} alt="" />
                                                <h3>Successfully Registered!</h3>
                                                <p>
                                                    Thank you for registering, now you can book your
                                                    <br /> deliveries from Vero1 Express.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormSection;