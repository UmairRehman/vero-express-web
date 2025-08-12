import React from 'react'
import DashIco from '../../assets/images/dast-ico1.png'

function BasicKpiCard({ heading }) {
    return (
        <>
            <div class="dast-4item d41">
                <h5>{heading} <span>$7,825</span></h5>
                <div class="dash-4ico">
                    <strong>+ 22%</strong>
                    <img src={DashIco} alt="" />
                </div>
            </div>
        </>
    )
}

export default BasicKpiCard