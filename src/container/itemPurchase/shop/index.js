import React from 'react'
import StoreInfo from '../../../component/item-purchase/shop/storeInfo'
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SidebarFilter from '../../../component/item-purchase/shop/filters'
import ShopHeader from '../../../component/item-purchase/shop/shop-header'
import ProductCard from '../../../component/item-purchase/shop/productsCard'
import ProductImage from '../../../assets/images/prod1.jpg'

function Shop() {
    const dummyProducts = [
        {
            id: 1,
            title: "Nike Aiforce Shoes",
            category: "Men-Shoes",
            price: 230,
            oldPrice: 630,
            rating: 4.8,
            reviews: 20,
            image: ProductImage,
            bestSeller: true,
            outOfStock: true,
        },
        {
            id: 2,
            title: "Nike Aiforce Shoes",
            category: "Men-Shoes",
            price: 230,
            oldPrice: 630,
            rating: 4.8,
            reviews: 20,
            image: ProductImage,
            bestSeller: true,
        },
        {
            id: 3,
            title: "Nike Aiforce Shoes",
            category: "Men-Shoes",
            price: 230,
            oldPrice: 630,
            rating: 4.8,
            reviews: 20,
            image: ProductImage,
            bestSeller: true,
        },
    ];
    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <StoreInfo />
            <section class="store-product">
                <div class="container">
                    <div class="row">
                        <SidebarFilter />
                        <div class="col-md-9">
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
    )
}

export default Shop