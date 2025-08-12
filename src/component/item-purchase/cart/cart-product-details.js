import React, { useState } from "react";
import TempImage from '../../../assets/images/prod1.jpg'
import CartItem from "./cart.product";


const initialCartItems = [
    {
        id: 1,
        category: "Women-Fashion",
        title: "Ladies Purse Bag - Original Leather",
        image: TempImage,
        price: 30.0,
        originalPrice: 47.0,
        stock: "In Stock",
        quantity: 1,
    },
    {
        id: 2,
        category: "Women-Fashion",
        title: "Ladies Purse Bag - Original Leather",
        image: TempImage,
        price: 30.0,
        originalPrice: 47.0,
        stock: "In Stock",
        quantity: 1,
    },
    {
        id: 3,
        category: "Women-Fashion",
        title: "Ladies Purse Bag - Original Leather",
        image: TempImage,
        price: 30.0,
        originalPrice: 47.0,
        stock: "In Stock",
        quantity: 1,
    },
];


const CartProductDetails = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQtyChange = (id, delta) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, Math.min(item.quantity + delta, 10)) }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = cartItems.length ? 10.0 : 0;
    const total = subtotal + delivery;

    return (
        <>
            <div className="cart-products">
                {cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQtyChange={handleQtyChange}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            <div className="car-left-total">
                <div className="row">
                    <div className="col-md-6">
                        <a className="backtoshop" href="#"><i className="fa fa-angle-left" /> Continue Shopping</a>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><label>Subtotal:</label><b>${subtotal.toFixed(2)}</b></li>
                            <li><label>Delivery:</label><b>${delivery.toFixed(2)}</b></li>
                            <li className="clt-total"><label>Total:</label><b>${total.toFixed(2)}</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductDetails;