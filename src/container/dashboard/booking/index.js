import React from 'react'
import { Tabs, Space, Tag } from 'antd';
import BasicKpiCard from '../../../component/dashboard/basicKpiCard';
import CustomTable from '../../../component/shared/table';
import { EyeOutlined } from '@ant-design/icons';


function Booking() {
    const { TabPane } = Tabs;
    const data = [
        {
            key: '1',
            orderId: '1',
            orderType: 'New',
            orderDate: '2022-01-01',
            status: ['nice', 'developer'],
        },
        {
            key: '2',
            orderId: '2',
            orderType: 'Pending',
            orderDate: '2022-01-02',
            status: ['loser'],
        },
        {
            key: '3',
            orderId: '3',
            orderType: 'Completed',
            orderDate: '2022-01-03',
            status: ['cool', 'teacher'],
        },
    ];


    const columns = [
        {
            title: 'Order Id',
            dataIndex: 'orderId',
            key: 'orderId',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Order Type',
            dataIndex: 'orderType',
            key: 'orderType',
        },
        {
            title: 'Order date',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => (
                <>
                    {status.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EyeOutlined />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div class="dash-9inn">

                <div class="dash-head">
                    <h1>Booking Log</h1>
                </div>

                <div className='row mb-5'>
                    <div className='col-md-3'>
                        <BasicKpiCard heading={"Active Orders"} />
                    </div>
                </div>

                <Tabs
                    defaultActiveKey="active-order"
                    tabBarGutter={20}
                    tabBarStyle={{
                        marginBottom: 24,
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        borderBottom: '1px solid #e8e8e8',
                    }}
                >
                    <TabPane
                        tab={<span className="nav-link active">Active Orders</span>}
                        key="active-order"
                    >
                        <div>
                            <CustomTable data={data} columns={columns} />
                        </div>
                    </TabPane>

                    <TabPane
                        tab={<span className="nav-link active">Previous Order</span>}
                        key="previous-order"
                    >
                        <div>
                            <CustomTable data={data} columns={columns} />

                        </div>
                    </TabPane>

                </Tabs>
            </div>


        </>
    )
}

export default Booking