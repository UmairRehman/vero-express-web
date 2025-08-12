import React, { useState } from "react";
import Header from '../../../component/header'
import SubHeader from '../../../component/shared/subHeader'
import Breadcrumb from '../../../component/item-purchase/breadcrumbs'
import DownloadApp from '../../../component/shared/downapp'
import Newsletter from '../../../component/shared/subscribe'
import FaqSection from '../../../component/shared/faq'
import Footer from '../../../component/footer'
import BestSeller from '../../../component/item-purchase/shop/bestSeller'
import TempImage from "../../../assets/images/prod-detail-1.jpg";
import { useNavigate } from 'react-router-dom'

function ProductDetails() {
    const navigate = useNavigate();
    const imageList = [
        TempImage, TempImage, TempImage, TempImage, TempImage, TempImage
    ];
    const [selectedImage, setSelectedImage] = useState(imageList[0]);
    const [selectedSize, setSelectedSize] = useState("XL");
    const [selectedColor, setSelectedColor] = useState("black");
    const [quantity, setQuantity] = useState(1);


    const sizes = ["XL", "L", "M", "S"];
    const colors = ["blue", "orange", "red", "green", "black"];

    const changeImage = (img) => setSelectedImage(img);

    const incrementQty = () =>
        setQuantity((prev) => (prev < 10 ? prev + 1 : prev));

    const decrementQty = () =>
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));


    return (
        <>
            <Header />
            <SubHeader />
            <Breadcrumb />
            <section class="product-banner">
                <div class="container">
                    <div className="row row-product">
                        {/* Left Image Section */}
                        <div className="col-md-5">
                            <div className="slider-img">
                                <div className="main-image">
                                    <img id="display-image" src={selectedImage} alt="Product" />
                                </div>
                                {/* <div className="thumbnails">
                                    {imageList.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Thumbnail ${i}`}
                                            onClick={() => changeImage(img)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    ))}
                                </div> */}
                            </div>
                        </div>

                        {/* Right Product Info Section */}
                        <div className="col-md-7">
                            <div className="prod-detail">
                                <h5>Women-Fashion</h5>
                                <h1>Ladies Purse Bag - Original Leather</h1>

                                <div className="prod-star">
                                    {[...Array(5)].map((_, i) => (
                                        <i className="fa fa-star" key={i}></i>
                                    ))}
                                    <span>4.8 (20 reviews)</span>
                                </div>

                                <ul className="price-select">
                                    <li>
                                        <label>Was:</label>
                                        <span>
                                            <strike>USD 430.00</strike> <i>Inclusive of VAT</i>
                                        </span>
                                    </li>
                                    <li>
                                        <label>Now:</label>
                                        <h4>USD 230.00</h4>
                                    </li>
                                    <li>
                                        <label>Size:</label>
                                        <b>{selectedSize}</b>
                                        <div className="sise-label">
                                            {sizes.map((size) => (
                                                <label key={size}>
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        checked={selectedSize === size}
                                                        onChange={() => setSelectedSize(size)}
                                                    />
                                                    <span>{size}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </li>
                                    <li>
                                        <label>Color:</label>
                                        <b>{selectedColor}</b>
                                        <div className="sise-label">
                                            {colors.map((color) => (
                                                <label key={color}>
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        checked={selectedColor === color}
                                                        onChange={() => setSelectedColor(color)}
                                                    />
                                                    <span className={color}></span>
                                                </label>
                                            ))}
                                        </div>
                                    </li>
                                </ul>

                                {/* Quantity + Add to Cart */}
                                <div className="qty-input-add">
                                    <div className="qty-input">
                                        <button
                                            className="qty-count qty-count--minus"
                                            onClick={decrementQty}
                                        >
                                            -
                                        </button>
                                        <input
                                            className="product-qty"
                                            type="number"
                                            min="1"
                                            max="10"
                                            value={quantity}
                                            readOnly
                                        />
                                        <button
                                            className="qty-count qty-count--add"
                                            onClick={incrementQty}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="btn btn-orange btn-add-to-cart" type="button">
                                        Add to cart
                                    </button>
                                </div>

                                {/* Other Action Buttons */}
                                <div className="function-btn">
                                    <a onClick={() => navigate("../item-purchase/cart-details")} className="btn btn-black view_cart" href="#viewcart">
                                        View Cart
                                    </a>
                                    <a className="btn btn-green compare_product" href="#compareproducts">
                                        Compare Products
                                    </a>
                                    <a className="btn btn-red add_to_wishlist" href="#addtowishlist">
                                        Add to Wishlist
                                    </a>
                                </div>
                            </div>
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

export default ProductDetails