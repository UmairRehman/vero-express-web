import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../services/basket';
import { message } from 'antd';
import DefaultImage from '../../../assets/images/default-image.webp';

export default function ProductCard({
    id, // product_id
    title,
    category,
    price,
    oldPrice,
    rating,
    reviews,
    image,
    bestSeller,
    outOfStock,
    storeName,
    pictures = []
}) {
    const navigate = useNavigate();
    const [imgError, setImgError] = useState(false);
    const handleAddToCart = async (e) => {
        e.preventDefault();
        if (outOfStock) return;
        try {
            const payload = {
                items: [
                    {
                        product_id: id,
                        quantity: 1,
                    },
                ],
                store_name: storeName,
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

    const productImage =
        pictures && pictures.length > 0 ? pictures[0] : image || null;


    return (
        <div className="prod_item">
            <div className="prod_thumb">
                {bestSeller && <span className="best_seller">Best Seller</span>}
                {outOfStock && <span className="out_of_stock">Out Of Stock</span>}
                <span className="wishlist">
                    <i className="fa fa-heart"></i>
                </span>
                {/* <img className="prod_img" src={image} alt={title} />
                 */}
                {productImage && !imgError ? (
                    <img
                        className="prod_img"
                        src={productImage}
                        alt={title}
                        onError={() => setImgError(true)} // mark error if image fails
                    />
                ) : (
                    <div className="prod_img flex items-center justify-center bg-gray-100 h-[200px]">
                        <img
                            className="prod_img"
                            src={DefaultImage}
                            alt={title}
                        />
                    </div>
                )}
            </div>
            <div className="prod_txt">
                <a onClick={() => navigate(`../item-purchase/product-details/${id}`)} className="prod_title">{title}</a>
                {/* <span className="prod_cat">{category}</span> */}
                <div className="prod-star">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                    <span>{rating} ({reviews} reviews)</span>
                </div>
                <h5>
                    ${price.toFixed(2)} <ins>${oldPrice.toFixed(2)}</ins>
                </h5>
                <a className="btn btn-orange add_to_cart" onClick={handleAddToCart}>
                    Add to Cart
                </a>
            </div>
        </div>
    );
}
