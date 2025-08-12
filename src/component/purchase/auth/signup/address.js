import React from 'react'
import { Form, Input, Select } from 'antd';

function Address({ values, onChange }) {
    return (
        <div className="ttb-form">
            <div className="row">
                <div className="col-md-12">
                    <h3>Address <span>Enter Your Personal Details</span></h3>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-12">
                    <label>Address</label>
                    <div className="field-wrap">
                        <i className="fa fa-regular fa-map"></i>
                        <Form.Item name="address" rules={[{ required: true, message: 'Address is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="Address" value={values.address} onChange={e => onChange({ ...values, address: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Country</label>
                    <div className="field-wrap">
                        <i className="fa fa-solid fa-globe"></i>
                        <Form.Item name="country" rules={[{ required: true, message: 'Country is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Select placeholder="Select Country" value={values.country} onChange={val => onChange({ ...values, country: val })}>
                                <Select.Option value="United States">United States</Select.Option>
                                <Select.Option value="United Arab Emirate">United Arab Emirate</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>State</label>
                    <div className="field-wrap">
                        <i className="fa fas fa-home"></i>
                        <Form.Item name="state" rules={[{ required: true, message: 'State is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Select placeholder="Select State" value={values.state} onChange={val => onChange({ ...values, state: val })}>
                                <Select.Option value="il">il</Select.Option>
                                <Select.Option value="ca">ca</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>City</label>
                    <div className="field-wrap">
                        <i className="fa fas fa-city"></i>
                        <Form.Item name="city" rules={[{ required: true, message: 'City is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Select placeholder="Select City" value={values.city} onChange={val => onChange({ ...values, city: val })}>
                                <Select.Option value="Boise">Boise</Select.Option>
                                <Select.Option value="Boise 1">Boise 1</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label>Zip Code</label>
                    <div className="field-wrap">
                        <i className="fa fas fa-file-archive"></i>
                        <Form.Item name="zip" rules={[{ required: true, message: 'Zip Code is required' }]}
                            style={{ marginBottom: 0 }}>
                            <Input placeholder="83704" value={values.zip} onChange={e => onChange({ ...values, zip: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address