import React, { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { updateUserAddresses } from '../../../services/user';
import { useDispatch, useSelector } from 'react-redux';
import { Authenticate } from '../../../redux/feature/authSlice';

const AddressModal = ({ visible, onCancel, onSuccess }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    // Check if user is logged in
    if (!user) {
        return (
            <Modal
                title="Add New Address"
                open={visible}
                onCancel={onCancel}
                footer={null}
                width={600}
            >
                <div className="text-center py-4">
                    <p>Please log in to add addresses.</p>
                    <Button className='btn btn-lgreen pt-1' type="primary" onClick={onCancel}>
                        Close
                    </Button>
                </div>
            </Modal>
        );
    }

    const handleSubmit = async (values) => {
        try {
            setLoading(true);
            // Create new address object
            const newAddress = {
                display_name: values.display_name,
                formatted_location: values.formatted_location,
            };
            if (values.latitude && values.longitude) {
                newAddress.coords = [parseFloat(values.latitude), parseFloat(values.longitude)];
            }
            const userAddresses = user.addresses || [];
            const updatedAddresses = [...userAddresses, newAddress];

            const payload = {
                addresses: updatedAddresses
            };

            const response = await updateUserAddresses(payload);

            if (response.data && response.data.success) {
                const apiAddresses = response.data.data;
                dispatch(Authenticate(apiAddresses));

                message.success('Address added successfully!');
                form.resetFields();
                onSuccess();
            } else {
                message.error('Failed to add address. Please try again.');
            }
        } catch (error) {
            message.error('Failed to add address. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        form.resetFields();
        onCancel();
    };

    return (
        <Modal
            title="Add New Address"
            open={visible}
            onCancel={handleCancel}
            footer={null}
            width={600}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    display_name: '',
                    formatted_location: '',
                    latitude: '',
                    longitude: ''
                }}
            >
                <Form.Item
                    name="display_name"
                    label="Display Name"
                    rules={[
                        { required: true, message: 'Please enter a display name' },
                        { max: 50, message: 'Display name must be less than 50 characters' }
                    ]}
                >
                    <Input placeholder="e.g., Office, Home, etc." />
                </Form.Item>

                <Form.Item
                    name="formatted_location"
                    label="Full Address"
                    rules={[
                        { required: true, message: 'Please enter the full address' },
                        { max: 200, message: 'Address must be less than 200 characters' }
                    ]}
                >
                    <Input.TextArea
                        placeholder="Enter the complete address including street, city, state, country, postal code"
                        rows={3}
                    />
                </Form.Item>

                <Form.Item
                    name="latitude"
                    label="Latitude"
                    rules={[
                        {
                            pattern: /^-?([1-8]?[0-9](\.[0-9]+)?|90(\.0+)?)$/,
                            message: 'Please enter a valid latitude between -90 and 90'
                        }
                    ]}
                >
                    <Input placeholder="e.g., 24.9109845" />
                </Form.Item>

                <Form.Item
                    name="longitude"
                    label="Longitude"
                    rules={[
                        {
                            pattern: /^-?((1[0-7][0-9]|[1-9]?[0-9])(\.[0-9]+)?|180(\.0+)?)$/,
                            message: 'Please enter a valid longitude between -180 and 180'
                        }
                    ]}
                >
                    <Input placeholder="e.g., 67.0869562" />
                </Form.Item>

                <Form.Item className="mb-0">
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                        <Button className='btn btn-lgreen pt-1 ' onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button className='btn btn-lgreen pt-1' type="primary" htmlType="submit" loading={loading}>
                            Add Address
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddressModal;
