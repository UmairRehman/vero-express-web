import React from 'react'
import { Tabs, Modal } from 'antd';
import { useState } from 'react';
import SpendingTab from '../../../component/dashboard/wallet/spendingTab';
import ManageCard from '../../../component/dashboard/wallet/manageCard';

function Wallet() {

    const { TabPane } = Tabs;
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (key) => setActiveModal(key);
    const closeModal = () => setActiveModal(null);

    return (
        <>
            <div class="dash-9inn">
                <div class="dash-head">
                    <h1>Wallet</h1>
                </div>

                {/* <div class="dash-nav">

                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#walletspending">Wallet Spending</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="pill" href="#managecards">Manage Cards</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="modal" href="#addcreditcard">Add credit Card</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="modal" href="#lescreditcard">Less credit Card</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="modal" data-target="#successpopup" href="javascript:;">Success Cards</a></li>
                        <li class="nav-item"><a class="nav-link" data-toggle="modal" data-target="#walletamntupdate" href="javascript:;">Wallet Update</a></li>
                    </ul>

                </div> */}


                <Tabs
                    defaultActiveKey="walletspending"
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
                        tab={<span className="nav-link active">Wallet Spending</span>}
                        key="walletspending"
                    >
                        <div><SpendingTab /></div>
                    </TabPane>

                    <TabPane
                        tab={<span className="nav-link">Manage Cards</span>}
                        key="managecards"
                    >
                        <div><ManageCard /></div>
                    </TabPane>

                    <TabPane
                        tab={
                            <span className="nav-link" onClick={() => openModal('addcreditcard')}>
                                Add Credit Card
                            </span>
                        }
                        disabled
                        key="addcreditcard"
                    />

                    <TabPane
                        tab={
                            <span className="nav-link" onClick={() => openModal('lesscreditcard')}>
                                Less Credit Card
                            </span>
                        }
                        disabled
                        key="lesscreditcard"
                    />

                    <TabPane
                        tab={
                            <span className="nav-link" onClick={() => openModal('successpopup')}>
                                Success Cards
                            </span>
                        }
                        disabled
                        key="successpopup"
                    />

                    <TabPane
                        tab={
                            <span className="nav-link" onClick={() => openModal('walletamntupdate')}>
                                Wallet Update
                            </span>
                        }
                        disabled
                        key="walletamntupdate"
                    />
                </Tabs>

            </div>
        </>
    )
}

export default Wallet