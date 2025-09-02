import React from 'react';
import { Form, Input, Select, Upload, Button, Row, Col, Typography, message } from 'antd';
import { UploadOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

function ParcelStep1({ onSubmit = () => {} }) {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Format the data according to the required payload structure
        const formData = {
            items: [
                {
                    receipt_image: values.receipt_image || "",
                    item_image: values.item_image || ""
                }
            ],
            selectType: values.selectType,
            deliveryVia: values.deliveryVia,
            specialInstructions: values.specialInstructions,
            specificcInstructions: values.specificcInstructions,
            deliveryPreference: values.deliveryPreference
        };
        
        console.log('Form submission data:', formData);
        console.log('Receipt Image URL:', formData.items[0].receipt_image);
        console.log('Item Image URL:', formData.items[0].item_image);
        message.success('Form submitted successfully!');
        
        // Call the onSubmit prop to navigate to step 2
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Form validation failed:', errorInfo);
        message.error('Please check the form for errors.');
    };

    const uploadProps = {
        name: 'file',
        // API endpoint for uploading images to temporary storage
        action: 'https://vero-1.herokuapp.com/api/v1/files/parcel-delivery/temp-files',
        headers: {
            authorization: 'authorization-text',
        },
        accept: '.png,.jpeg,.jpg',
        beforeUpload: (file) => {
            const isImage = file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg';
            if (!isImage) {
                message.error('You can only upload PNG and JPEG images!');
                return false;
            }
            const isLt5M = file.size / 1024 / 1024 < 5;
            if (!isLt5M) {
                message.error('Image must be smaller than 5MB!');
                return false;
            }
            return true;
        },
        onChange(info) {
            if (info.file.status === 'uploading') {
                console.log('Uploading...', info.file.name);
                         } else if (info.file.status === 'done') {
                 console.log('Upload successful:', info.file.response);
                 console.log('File response structure:', info.file.response);
                 
                 // Set the returned URL to the appropriate field
                 console.log('Checking response structure...');
                 console.log('info.file.response:', info.file.response);
                 console.log('info.file.response.data:', info.file.response?.data);
                 console.log('info.file.response.data?.data:', info.file.response?.data?.data);
                 console.log('info.file.response.data?.data?.file:', info.file.response?.data?.data?.file);
                 
                                   if (info.file.response && info.file.response.data?.data?.file) {
                     // Use info.fileList instead of form.getFieldValue for current state
                     const currentImages = info.fileList || [];
                     const formFieldValue = form.getFieldValue('uploadImages') || [];
                     
                     console.log('Current images from fileList:', currentImages);
                     console.log('Form field value (uploadImages):', formFieldValue);
                     console.log('Difference - fileList vs form field:', {
                         fileListLength: currentImages.length,
                         formFieldLength: formFieldValue.length,
                         fileListHasResponse: currentImages.some(f => f.response),
                         formFieldHasResponse: formFieldValue.some(f => f.response)
                     });
                     
                     const uploadedUrls = currentImages
                         .filter(file => file && file.response?.data?.data?.file)
                         .map(file => file.response.data.data.file);
                     
                     console.log('Filtered and mapped URLs:', uploadedUrls);
                     
                     // Set receipt_image to first image, item_image to second image if available
                     console.log('Uploaded URLs:', uploadedUrls);
                     if (uploadedUrls.length > 0) {
                         form.setFieldsValue({
                             receipt_image: uploadedUrls[0] || ''
                         });
                         console.log('Set receipt_image to:', uploadedUrls[0]);
                     }
                     if (uploadedUrls.length > 1) {
                         form.setFieldsValue({
                             item_image: uploadedUrls[1] || ''
                         });
                         console.log('Set item_image to:', uploadedUrls[1]);
                     }
                     
                                          message.success(`${info.file.name} uploaded successfully`);
                     
                     // Force form validation to re-run after setting the values
                     setTimeout(() => {
                         // Update the form field value to ensure synchronization
                         const currentFileList = info.fileList || [];
                         form.setFieldsValue({
                             uploadImages: currentFileList
                         });
                         
                         // Then re-validate
                         form.validateFields(['uploadImages']);
                     }, 100);
                 } else {
                     console.error('Invalid response structure:', info.file.response);
                     
                     // Try alternative response paths
                     let fileUrl = null;
                     if (info.file.response?.data?.file) {
                         fileUrl = info.file.response.data.file;
                         console.log('Found file URL in alternative path:', fileUrl);
                     } else if (info.file.response?.file) {
                         fileUrl = info.file.response.file;
                         console.log('Found file URL in root path:', fileUrl);
                     }
                     
                                           if (fileUrl) {
                          // Set the URL even if it's in a different path
                          const currentImages = info.fileList || [];
                          const uploadedUrls = currentImages
                              .filter(file => file && file.response && (
                                  file.response?.data?.data?.file || 
                                  file.response?.data?.file || 
                                  file.response?.file
                              ))
                              .map(file => file.response?.data?.data?.file || file.response?.data?.file || file.response?.file);
                         
                         if (uploadedUrls.length > 0) {
                             form.setFieldsValue({
                                 receipt_image: uploadedUrls[0] || ''
                             });
                             console.log('Set receipt_image to (alternative path):', uploadedUrls[0]);
                         }
                         if (uploadedUrls.length > 1) {
                             form.setFieldsValue({
                                 item_image: uploadedUrls[1] || ''
                             });
                             console.log('Set item_image to (alternative path):', uploadedUrls[1]);
                         }
                         
                         message.success(`${info.file.name} uploaded successfully (using alternative path)`);
                         
                         // Force form validation to re-run after setting the values
                         setTimeout(() => {
                             // Update the form field value to ensure synchronization
                             const currentFileList = info.fileList || [];
                             form.setFieldsValue({
                                 uploadImages: currentFileList
                             });
                             
                             // Then re-validate
                             form.validateFields(['uploadImages']);
                         }, 100);
                     }
                 }
            } else if (info.file.status === 'error') {
                console.error('Upload error:', info.file.error);
                message.error(`${info.file.name} upload failed.`);
            }
        },
        onRemove: (file) => {
            // Recalculate the image URLs when files are removed
            const currentImages = form.getFieldValue('uploadImages') || [];
                         const remainingUrls = currentImages
                 ?.filter(f => f.uid !== file.uid && f.status === 'done' && f.response && (
                     f.response?.data?.data?.file || 
                     f.response?.data?.file || 
                     f.response?.file
                 ))
                 .map(f => f.response?.data?.data?.file || f.response?.data?.file || f.response?.file);
            
            form.setFieldsValue({
                receipt_image: remainingUrls[0] || '',
                item_image: remainingUrls[1] || ''
            });
        }
    };

    return (
        <>
            <Form
                form={form}
                name="parcelStep1Form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="ttb-form"
            >
                <Row>
                    <Col span={24}>
                        <Title level={3}>
                            Item Information
                            <span style={{ display: 'block', fontSize: '14px', fontWeight: 'normal', color: '#666' }}>
                                Enter Your Item Details
                            </span>
                        </Title>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="selectType"
                            label="Select Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a type!',
                                },
                            ]}
                        >
                            <Select placeholder="Select type">
                                <Option value="itemReturn">Item Return</Option>
                                <Option value="itemExchange">Item Exchange</Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="deliveryVia"
                            label="Delivery Via"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select delivery method!',
                                },
                            ]}
                        >
                            <Select placeholder="Select delivery method">
                                <Option value="rider">Rider</Option>
                                <Option value="drone">Drone</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="specialInstructions"
                            label="Special Instructions"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter special instructions!',
                                },
                            ]}
                        >
                            <TextArea
                                placeholder="Enter here..."
                                rows={3}
                                showCount
                                maxLength={300}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item
                            name="uploadImages"
                            label="Upload Receipt & Item Images"
                            rules={[
                                {
                                                                         validator: (_, value) => {
                                         console.log('Validation called with value:', value);
                                         
                                         if (!value || value.length === 0) {
                                             console.log('No files uploaded');
                                             return Promise.reject(new Error('Please upload at least one image!'));
                                         }
                                         
                                         // Check if at least one image has been successfully uploaded
                                         const hasSuccessfulUpload = value.some(file => {
                                             const hasResponse = file && file.status === 'done' && (
                                                 file.response?.data?.data?.file || 
                                                 file.response?.data?.file || 
                                                 file.response?.file
                                             );
                                             console.log('File validation:', {
                                                 fileName: file?.name,
                                                 status: file?.status,
                                                 hasResponse: !!hasResponse,
                                                 responsePath: file?.response?.data?.data?.file || file?.response?.data?.file || file?.response?.file
                                             });
                                             return hasResponse;
                                         });
                                         
                                         console.log('Validation result - hasSuccessfulUpload:', hasSuccessfulUpload);
                                         
                                         if (!hasSuccessfulUpload) {
                                             return Promise.reject(new Error('Please wait for image upload to complete!'));
                                         }
                                         return Promise.resolve();
                                     }
                                },
                            ]}
                        >
                            <Upload {...uploadProps} listType="picture-card" maxCount={5}>
                                <div>
                                    <UploadOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                            </Upload>
                            <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
                                Upload receipt and item images (PNG, JPEG only, max 5MB each)
                        </div>
                        </Form.Item>
                    </Col>
                </Row>

                {/* Hidden field to store the uploaded image URL */}
                <Form.Item
                    name="receipt_image"
                    hidden
                >
                    <Input />
                </Form.Item>

                {/* Hidden field to store the item image URL */}
                <Form.Item
                    name="item_image"
                    hidden
                >
                    <Input />
                </Form.Item>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="specificcInstructions"
                            label="Specific Instructions"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter special instructions!',
                                },
                            ]}
                        >
                            <TextArea
                                placeholder="Enter here..."
                                rows={3}
                                showCount
                                maxLength={300}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="deliveryPreference"
                            label="Delivery Preference"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter delivery preference!',
                                },
                            ]}
                        >
                            <TextArea
                                placeholder="Enter here..."
                                rows={3}
                                showCount
                                maxLength={300}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>

                </Row>

                <div className="btn-nex-prev full" style={{ marginTop: '24px' }}>
                    <Button
                        type="default"
                        icon={<ArrowLeftOutlined />}
                        size="large"
                        className="btn-grey btnNext"
                    >
                        Previous
                    </Button>
                    <Button
                        type="primary"
                        size="large"
                        className="btn-primary btnPrevious"
                        htmlType="submit"
                    >
                        Continue
                    </Button>
            </div>
            </Form>
        </>
    );
}

export default ParcelStep1;