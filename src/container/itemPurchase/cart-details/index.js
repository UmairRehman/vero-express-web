import React, { useEffect, useState } from 'react'
import Header from '../../../component/header'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import SubHeader from '../../../component/shared/subHeader'
import CartProductDetails from '../../../component/item-purchase/cart/cart-product-details'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import CartSummaryMain from '../../../component/item-purchase/cart/cart-summary'
import { message } from 'antd'
import { getCart } from '../../../services/basket'

function CartDetails() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const response = await getCart();
            if (response.data && response.data.data.basket) {
                const basket = response.data.data.basket;
                const processedItems = basket.items.map(item => {
                    return {
                        id: item.product_id._id,
                        _id: item.product_id._id,
                        category: item.product_id.category,
                        title: item.product_id.product_name,
                        image: item.product_id.product_image,
                        price: item.product_id.product_price,
                        originalPrice: item.product_id.product_price,
                        quantity: item.quantity || 1,
                    };
                });
                setCartItems(processedItems);
            } else {
                message.error("No basket data found");
                setCartItems([]);
            }
        } catch (error) {
            setError('Failed to load cart items');
            message.error("Failed to load cart items");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <section class="product-banner">
                <div class="container">
                    <div class="row row-cart">

                        <div className="col-md-8">
                            <CartProductDetails cartItems={cartItems} setCartItems={setCartItems} fetchCartItems={fetchCartItems} loading={loading} error={error} />
                        </div>
                        <div className="col-md-4">
                            <CartSummaryMain cartItems={cartItems} />
                        </div>
                    </div>
                </div>
            </section>
            <BestSeller />
            <DownloadApp />
            <Newsletter />
            <FaqSection />
            <Footer />
        </>
    )
}

export default CartDetails