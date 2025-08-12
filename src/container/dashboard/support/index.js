import React from 'react'
import { Tabs, Modal } from 'antd';
import PrivacyPolicy from '../../../component/dashboard/support/privacy-policy';
import TermsAndConditions from '../../../component/dashboard/support/term-and-condition';
import ReturnPolicy from '../../../component/dashboard/support/return-policy';


function Support() {
    const { TabPane } = Tabs;

    return (
        <>

            <div class="dash-9inn">

                <div class="dash-head">
                    <h1>Privacy Policy </h1>
                </div>
                <Tabs
                    defaultActiveKey="privacy"
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
                        tab={<span className="nav-link active">Privacy Policy</span>}
                        key="privacy"
                    >
                        <div><PrivacyPolicy /></div>
                    </TabPane>


                    <TabPane
                        tab={<span className="nav-link active">Terms and comditions</span>}
                        key="terms"
                    >
                        <div><TermsAndConditions /></div>
                    </TabPane>

                    <TabPane
                        tab={<span className="nav-link active">Return Policy</span>}
                        key="ReturnPolicy"
                    >
                        <div><ReturnPolicy /></div>
                    </TabPane>
                </Tabs>
            </div>
        </>
    )
}

export default Support