import React from "react";
import TempImage from '../../../assets/images/prod3.jpg'
import Slider from "react-slick";
const bestSellers = [
    {
        id: 2,
        title: "Nike Aiforce Shoes",
        category: "Men-Shoes",
        price: 230,
        oldPrice: 630,
        rating: 4.8,
        reviews: 20,
        image: TempImage,
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
        image: TempImage,
        bestSeller: true,
    },
    {
        id: 4,
        title: "Nike Aiforce Shoes",
        category: "Men-Shoes",
        price: 230,
        oldPrice: 630,
        rating: 4.8,
        reviews: 20,
        image: TempImage,
        bestSeller: true,
    },
    {
        id: 5,
        title: "Nike Aiforce Shoes",
        category: "Men-Shoes",
        price: 230,
        oldPrice: 630,
        rating: 4.8,
        reviews: 20,
        image: TempImage,
        bestSeller: true,
    },
];
function BestSeller() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // or 3, 2, etc.
        slidesToScroll: 1,
        arrows: true,
    };
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
                                {bestSellers.map((product) => (
                                    <div key={product.id} className="prod-wrap">
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

export default BestSeller

const ProductCard = ({ title,
    category,
    price,
    oldPrice,
    rating,
    reviews,
    image,
    bestSeller, }) => {
    return (
        <div className="prod_item">
            <div className="prod_thumb">
                {bestSeller && <span className="best_seller">Best Seller</span>}
                <span className="wishlist"><i className="fa fa-heart"></i></span>
                <img className="prod_img" src={image} alt={title} />
            </div>
            <div className="prod_txt">
                <a href="#" className="prod_title">{title}</a>
                <span className="prod_cat">{category}</span>
                <div className="prod-star">
                    {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa fa-star"></i>
                    ))}
                    <span>{rating} ({reviews} reviews)</span>
                </div>
                <h5>${price.toFixed(2)} <ins>${oldPrice.toFixed(2)}</ins></h5>
                <a href="#" className="btn btn-orange add_to_cart">Add to Cart</a>
            </div>
        </div>
    );
}