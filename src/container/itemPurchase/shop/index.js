import React, { useEffect, useState } from 'react'
import StoreInfo from '../../../component/item-purchase/shop/storeInfo'
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SidebarFilter from '../../../component/item-purchase/shop/filters'
import ShopHeader from '../../../component/item-purchase/shop/shop-header'
import ProductCard from '../../../component/item-purchase/shop/productsCard'
import ProductImage from '../../../assets/images/prod1.jpg'
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { getSelectedStoreDetails } from '../../../redux/feature/stores'
import { getSingleStoreDetails, searchStoreProducts } from '../../../services/stores';
import { getCart } from '../../../services/basket';
import { message } from 'antd'

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Shop() {
    const { selectedStore } = useSelector(getSelectedStoreDetails) || null;
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [store, setStore] = useState([]);

    const [loading, setLoading] = useState(false);

    const fetchStore = async () => {
        setLoading(true);
        const storeId = searchParams.get("store_id");
        console.log("Store Id:", storeId);
        try {
            const res = await getSingleStoreDetails(storeId);
            if (res?.data?.data) {
                setStore(res.data.data);
            } else {
                setStore([]);
            }
        } catch {
            message.error('Failed to load stores');
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchStore();
    }, [searchParams]);



    const fetchProducts = async () => {
        setLoading(true);
        try {
            const params = Object.fromEntries([...searchParams.entries()]);
            const res = await searchStoreProducts(params);
            if (res?.data?.data.data) {
                setProducts(res.data.data.data);
            } else {
                setProducts([]);
            }
        } catch {
            message.error('Failed to load stores');
        }
        setLoading(false);
    };
    useEffect(() => {

        fetchProducts();
    }, [searchParams]);


    return (
        <>
            <ScrollToTop />
            <Header />
            <SubHeader />
            <Breadcrumb />
            <StoreInfo store={store} />
            <section className="store-product">
                <div className="container">
                    <div className="row">
                        <SidebarFilter />
                        <div className="col-md-9">
                            <ShopHeader />
                            <div className="row">
                                {loading ? (
                                    <div className="col-12 text-center">Loading...</div>
                                ) : products.length === 0 ? (
                                    <div className="col-12 text-center">No products found.</div>
                                ) : (
                                    products.map((product, index) => (
                                        <div className="col-md-4" key={product._id || index}>
                                            <ProductCard
                                                id={product._id}
                                                title={product.product_name}
                                                category={product.product_category}
                                                price={product.product_price}
                                                oldPrice={product.product_price}
                                                rating={product.product_rating}
                                                reviews={0}
                                                image={product.product_image}
                                                bestSeller={false}
                                                outOfStock={false}
                                                store={product.product_store}
                                                pictures={product.pictures}
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop