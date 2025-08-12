import React from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Input, Select } from 'antd';

function PersonalDetails({ values, onChange }) {
    return (
        <div className="ttb-form">
            <div className="row">
                <div className="col-md-12">
                    <h3>Personal Information <span>Enter Your Personal Details</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>First Name</label>
                    <div className="field-wrap">
                        <i className="fa fa-regular fa-user"></i>
                        <Form.Item name="firstName" rules={[{ required: true, message: 'First Name is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="Simon" value={values.firstName} onChange={e => onChange({ ...values, firstName: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <div className="field-wrap">
                        <i className="fa fa-regular fa-user"></i>
                        <Form.Item name="lastName" rules={[{ required: true, message: 'Last Name is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="Lewis" value={values.lastName} onChange={e => onChange({ ...values, lastName: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Email Address</label>
                    <div className="field-wrap">
                        <i className="fa fa-regular fa-envelope"></i>
                        <Form.Item name="email" rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Invalid email' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="Simon.lewis@gmail.com" value={values.email} onChange={e => onChange({ ...values, email: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Phone Number</label>
                    <div className="field-wrap">
                        <i className="fa fa-mobile"></i>
                        <Form.Item name="phone" rules={[{ required: true, message: 'Phone Number is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="+1 (908) 1234 567" value={values.phone} onChange={e => onChange({ ...values, phone: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Gender</label>
                    <div className="field-wrap">
                        <i className="fa fa-user"></i>
                        <Form.Item name="gender" rules={[{ required: true, message: 'Gender is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Select placeholder="Select Gender" value={values.gender} onChange={val => onChange({ ...values, gender: val })}>
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Password</label>
                    <div className="field-wrap">
                        <i className="fa fa-lock"></i>
                        <Form.Item name="password" rules={[{ required: true, message: 'Password is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input.Password placeholder="Password" value={values.password} onChange={e => onChange({ ...values, password: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalDetails