import React, { useEffect, useState } from "react";
import TempImage from '../../../assets/images/prod3.jpg'
import Slider from "react-slick";
import { searchStoreProducts } from "../../../services/stores";
import { getAllStoreDetails } from "../../../redux/feature/stores";
import { useSelector } from "react-redux";
import DefaultImage from '../../../assets/images/default-image.webp';
import { message } from "antd";
import { addToCart } from "../../../services/basket";
function BestSeller() {
    const selectedStore = useSelector(getAllStoreDetails) || [];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // or 3, 2, etc.
        slidesToScroll: 1,
        arrows: true,
    };


    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        if (selectedStore.length > 0) {
            try {
                const res = await searchStoreProducts(
                    {
                        store_name: selectedStore[0].store_name,
                        per_page: 4,
                        page: 1,
                    }
                );
                if (res?.data?.data.data) {
                    console.log(res.data.data.data, "asdnaskjdn");
                    setProducts(res.data.data.data);
                } else {
                    setProducts([]);
                }
            } catch {
                setProducts([]);
            }
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);
console.log(products,"asjldnasld")

    return (
        <>
            <section className="best-seller">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 head_style">
                            <h5>Best Seller</h5>
                            <h2>People also bought</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="best-slider-sim d-flex flex-wrap gap-4">
                                {products.map((product) => (
                                    <div key={product.id} className="prod-wrap" style={{ width: '23%' }}>
                                        <ProductCard product={product} />
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

export default BestSeller

const ProductCard = ({ product }) => {
    const handleAddToCart = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                items: [
                    {
                        product_id: product._id,
                        quantity: 1,
                    },
                ],
                store_name: product.product_store,
            };
            const res = await addToCart(payload);
            if (res.data.success) {
                message.success("Item Adeed to cart.");

            } else {
                message.error("Something went wrong");
            }
        } catch (err) {
            message.error("Something wend wrong");
        }
    };

    return (
        <div className="prod_item">
            <div className="prod_thumb">
                {/* {bestSeller && <span className="best_seller">Best Seller</span>} */}
                <span className="wishlist"><i className="fa fa-heart"></i></span>
                <img
                    className="prod_img"
                    src={product?.product_image || DefaultImage}
                    alt={product?.product_name || "Product"}
                    onError={(e) => {
                        e.currentTarget.src = DefaultImage; // fallback
                        e.currentTarget.onerror = null;     // prevent infinite loop
                    }}
                />
            </div>
            <div className="prod_txt mt-3">
                <a href="#" className="prod_title">{product.product_name}</a>
                {/* <span className="prod_cat">{category}</span> */}
                <div className="prod-star mt-3">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                    <span>0  reviews</span>
                </div>
                {/* <h5>${price.toFixed(2)} <ins>${oldPrice.toFixed(2)}</ins></h5> */}
                <a onClick={handleAddToCart} className="btn btn-green mt-3">Add to Cart</a>
            </div>
        </div>
    );
}