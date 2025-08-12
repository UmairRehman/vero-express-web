import React from 'react'
import ArrowImage from '../../assets/images/arrow-right.png'
import WhDash from '../../assets/images/wh-dash-brd.png'
import DashCir from '../../assets/images/dash-cir-reuni.png'
import WhRev from '../../assets/images/wh-rev-perc.png'
import DashIco2 from '../../assets/images/dast-ico2.png'
import BasicKpiCard from '../../component/dashboard/basicKpiCard'



function Dashboard() {
    return (
        <>
            <div class="dash-9inn">

                <div class="dash-head">
                    <h1>Dashboard</h1>
                </div>

                <div class="dash-report">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="wh-box">
                                <div class="wh-box-hd dash-arp">
                                    <h5>Dashboard</h5>
                                    <a class="amore" href="javascript:;">Advanced Report
                                        <img class="arrow-right" src={ArrowImage} alt="" /></a>
                                </div>
                                <img class="wh-dash-brd" src={WhDash} alt="" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="wh-box">
                                <div class="wh-box-hd dash-arp">
                                    <h5>Cart</h5>
                                </div>

                                <div class="dash-reuni-circle">
                                    <img class="dash-cir-reuni" src={DashCir} alt="" />
                                </div>

                                <ul class="dash-reuni-ul">
                                    <li><b>Adandoned Cart</b> <span>720</span></li>
                                    <li><b>Adandoned Revenue</b> <span>$5,900</span></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="dash-reuni">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="wh-box">
                                <div class="wh-box-hd dash-arp">
                                    <h5>Revenue by device</h5>
                                    <a class="amore" href="javascript:;">More
                                        <img class="arrow-right" src={ArrowImage} alt="" /></a>
                                </div>
                                <div class="wh-rev-ico">
                                    <img class="wh-rev-perc" src={WhRev} alt="" />
                                </div>
                                <div class="wh-rev-ul">
                                    <ul>
                                        <li class="wrev1"><label>Desktop</label> <b>$830.03</b> <span>64.2%</span></li>
                                        <li class="wrev2"><label>Tablet</label> <b>$550.81</b> <span>15.3%</span></li>
                                    </ul>
                                    <ul>
                                        <li class="wrev3"><label>Mobile</label> <b>$755.75</b> <span>48.6%</span></li>
                                        <li class="wrev4"><label>Unknown</label> <b>$150.84</b> <span>8.6%</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="wh-box wh-box-traffic">
                                <div class="wh-box-hd dash-arp">
                                    <h5>Traffic</h5>
                                    <a class="amore" href="javascript:;">More
                                        <img class="arrow-right" src={ArrowImage} alt="" /></a>
                                </div>

                                <div class="dash-4spot">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <BasicKpiCard heading={"Revenue"} />
                                        </div>
                                        <div class="col-md-6">
                                            <BasicKpiCard heading={"Orders"} />
                                        </div>
                                    </div>
                                </div>

                                <div class="wh-rev-chart">
                                    <img src="<?php echo $siteurl; ?>assets/images/wh-rev-chart.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Dashboard