import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
    title,
    category,
    price,
    oldPrice,
    rating,
    reviews,
    image,
    bestSeller,
    outOfStock,
}) {
    const navigate = useNavigate();

    return (
        <div className="prod_item">
            <div className="prod_thumb">
                {bestSeller && <span className="best_seller">Best Seller</span>}
                {outOfStock && <span className="out_of_stock">Out Of Stock</span>}
                <span className="wishlist">
                    <i className="fa fa-heart"></i>
                </span>
                <img className="prod_img" src={image} alt={title} />
            </div>
            <div className="prod_txt">
                <a onClick={()=> navigate("../item-purchase/product-details")} className="prod_title">{title}</a>
                <span className="prod_cat">{category}</span>
                <div className="prod-star">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                    <span>{rating} ({reviews} reviews)</span>
                </div>
                <h5>
                    ${price.toFixed(2)} <ins>${oldPrice.toFixed(2)}</ins>
                </h5>
                <a href="#" className="btn btn-orange add_to_cart">Add to Cart</a>
            </div>
        </div>
    );
}
