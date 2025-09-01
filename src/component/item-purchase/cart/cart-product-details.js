import React, { useState, useEffect } from "react";
import TempImage from '../../../assets/images/prod1.jpg'
import CartItem from "./cart.product";
import { getCart, deleteCartItem, updateBasket } from '../../../services/basket';
import { message } from 'antd';
import { useSelector } from "react-redux";
import { getSelectedStoreDetails } from "../../../redux/feature/stores";
import { useNavigate } from "react-router-dom";

const CartProductDetails = ({ cartItems, setCartItems, fetchCartItems, loading, error }) => {
    const navigate = useNavigate();
    const {
        selectedStore
    } = useSelector(getSelectedStoreDetails) || null;

    const storeName = selectedStore.display_name || null;

    useEffect(() => {
        if (!storeName) {
            message.error("Store name is not available. Please select a store to proceed.");
            navigate("/");
        }
    }, [])


    const handleQtyChange = async (id, delta) => {
        try {
            // Find current item to calculate new quantity
            const currentItem = cartItems.find(item => item.id === id);
            if (!currentItem) return;

            // Calculate new quantity based on current quantity + delta
            const newQuantity = Math.max(1, Math.min(10, currentItem.quantity + delta));

            // Update local state first for immediate UI feedback
            setCartItems((items) =>
                items.map((item) =>
                    item.id === id
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );

            // Prepare payload for API with updated quantities
            const updatedItems = cartItems.map(item => ({
                product_id: item.id,
                quantity: item.id === id ? newQuantity : item.quantity
            }));

            // Call API to update basket
            const response = await updateBasket({
                items: updatedItems,
                store_name: storeName
            });

            if (response.data && response.data.success) {
                message.success("Cart updated successfully");
                // Refresh cart to ensure sync with server
                await fetchCartItems();
            } else {
                message.error("Failed to update cart");
                // Revert local state if API call failed
                await fetchCartItems();
            }
        } catch (error) {
            message.error("Failed to update cart");
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteCartItem(id);
            if (response.data && response.data.success) {
                message.success("Item removed from cart successfully");
                await fetchCartItems();
            } else {
                message.error("Failed to remove item from cart");
            }
        } catch (error) {
            message.error("Failed to remove item from cart");
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // const delivery = cartItems.length ? 10.0 : 0;
    const total = subtotal;

    if (loading) {
        return (
            <div className="cart-products">
                <div className="text-center py-4">
                    <p>Loading cart items...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="cart-products">
                <div className="text-center py-4 text-danger">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="cart-products">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onQtyChange={handleQtyChange}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <div className="text-center py-4">
                        <p>Your cart is empty</p>
                    </div>
                )}
            </div>

            <div className="car-left-total">
                <div className="row">
                    <div className="col-md-6">
                        <a className="backtoshop" href="#"><i className="fa fa-angle-left" /> Continue Shopping</a>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><label>Subtotal:</label><b>${subtotal.toFixed(2)}</b></li>
                            {/* <li><label>Delivery:</label><b>${delivery.toFixed(2)}</b></li> */}
                            <li className="clt-total"><label>Total:</label><b>${total.toFixed(2)}</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductDetails;