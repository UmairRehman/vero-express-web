import React, { useState } from 'react';
import { Modal } from 'antd';

const CustomModal = ({ isModalOpen, handleCancel, handleOk, title, children }) => {
    return (
        <>
            <Modal
                title={title}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                // onOk={handleOk}
                // onCancel={handleCancel}
                footer={null}
            >
                {children}
            </Modal>
        </>
    );
};

export default CustomModal;