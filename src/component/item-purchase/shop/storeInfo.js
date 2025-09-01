

function StoreInfo({ store }) {
    if (!store) return <></>;
    return (
        <>
            <section class="strdef-banner">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12">
                            <div class="strdef-bann">
                                {store?.pictures && store?.pictures?.length > 0 &&
                                    <img class="str-banner" src={store?.pictures[0]} alt="" />
                                }
                                <div class="str-def-list">
                                    <div class="str-def-icon">
                                        <img height={"150px"} src={store?.store_logo} alt="" />
                                    </div>
                                    <div class="str-def-txt">
                                        <h4>{store?.display_name || store?.store_name}</h4>
                                        <ul>
                                            <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i> <span>4.8 (133 Reviews)</span></li>
                                            <li><i class="fa fa-map"></i> <span>12072 W McMillan Rd, Boise, IL - 87313</span></li>
                                            <li><i class="fa fa-date"></i> <span>Joined April 2021</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoreInfo