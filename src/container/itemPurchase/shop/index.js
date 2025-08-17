import React, { useEffect } from 'react'
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
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function Shop() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedStore } = useSelector(getSelectedStoreDetails) || null; // ✅ moved here

    const dummyProducts = [
        { id: 1, title: "Nike Airforce Shoes", category: "Men-Shoes", price: 230, oldPrice: 630, rating: 4.8, reviews: 20, image: ProductImage, bestSeller: true, outOfStock: true },
        { id: 2, title: "Nike Airforce Shoes", category: "Men-Shoes", price: 230, oldPrice: 630, rating: 4.8, reviews: 20, image: ProductImage, bestSeller: true },
        { id: 3, title: "Nike Airforce Shoes", category: "Men-Shoes", price: 230, oldPrice: 630, rating: 4.8, reviews: 20, image: ProductImage, bestSeller: true },
    ];

    return (
        <>
            <ScrollToTop />
            <Header />
            <SubHeader />
            <Breadcrumb />
            <StoreInfo store={selectedStore} /> {/* ✅ now works */}
            <section className="store-product">
                <div className="container">
                    <div className="row">
                        <SidebarFilter />
                        <div className="col-md-9">
                            <ShopHeader />
                            <div className="row">
                                {dummyProducts.map((product, index) => (
                                    <div className="col-md-4" key={`${product.id}-${index}`}>
                                        <ProductCard {...product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop