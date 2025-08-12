import React from 'react'
import Header from '../../component/header'
import SubHeader from '../../component/shared/subHeader'
import Sidebar from '../../component/dashboard/sidebar'

function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <SubHeader />
            <div class="dashboard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3 dash-left-area">
                            <Sidebar />
                        </div>
                        <div className='col-md-9 dash-right-area'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout