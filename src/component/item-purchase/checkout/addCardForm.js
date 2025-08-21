import React from "react";
import { Form, Input, Checkbox, DatePicker, Row, Col, Button } from "antd";
import dayjs from "dayjs";

export default function AddCardForm({ handleAddCardSubmit, formRef }) {
    return (
        <Form 
            ref={formRef}
            layout="vertical" 
            onFinish={handleAddCardSubmit}
        >
            <Row gutter={16}>
                {/* Cardholder Name */}
                <Col span={24}>
                    <Form.Item
                        label="Cardholder Name"
                        name="cardholderName"
                        rules={[{ required: true, message: "Please enter cardholder name" }]}
                    >
                        <Input
                            placeholder="Enter cardholder name"
                        />
                    </Form.Item>
                </Col>

                {/* Card Number */}
                <Col span={24}>
                    <Form.Item
                        label="Card Number"
                        name="cardNumber"
                        rules={[{ required: true, message: "Please enter card number" }]}
                    >
                        <Input
                            placeholder="1234 5678 9012 3456"
                            maxLength={19} // optional: format as #### #### #### ####
                        />
                    </Form.Item>
                </Col>

                {/* Expiry Date */}
                <Col span={12}>
                    <Form.Item
                        label="Expiry Date"
                        name="expiryDate"
                        rules={[{ required: true, message: "Please select expiry date" }]}
                    >
                        <DatePicker
                            picker="month"
                            format="MM/YY"
                            style={{ width: "100%" }}
                            placeholder="MM/YY"
                            disabledDate={(current) => current && current < dayjs().startOf("month")}
                            getPopupContainer={(triggerNode) => triggerNode.parentNode} // ✅ ensures popup inside modal
                            popupStyle={{ zIndex: 2000 }}
                        />
                    </Form.Item>
                </Col>

                {/* CVV */}
                <Col span={12}>
                    <Form.Item
                        label="CVV"
                        name="cvv"
                        rules={[{ required: true, message: "Please enter CVV" }]}
                    >
                        <Input.Password
                            placeholder="123"
                            maxLength={4}
                        />
                    </Form.Item>
                </Col>

                {/* Save Card */}
                <Col span={24}>
                    <Form.Item name="saveCard" valuePropName="checked">
                        <Checkbox>
                            Save this card for future use
                        </Checkbox>
                    </Form.Item>
                </Col>


            </Row>
        </Form>
    );
}
