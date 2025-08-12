import React, { useState } from "react"

function CheckoutPricing({ subtotal, delivery, itemCount, discount = 0 }) {
    const estimatedTotal = subtotal + delivery;
    return (
        <>
            <div className="cart-pbx">
                <div className="cart-uls">
                    <ul>
                        <li><label>Subtotal (items)</label> <strong>{itemCount}</strong></li>
                        <li><label>Price (Total)</label> <strong>${subtotal.toFixed(2)}</strong></li>
                        <li><label>Delivery</label> <strong>${delivery.toFixed(2)}</strong></li>
                        {discount > 0 && (
                            <li><label>Discount</label> <strong>- ${discount.toFixed(2)}</strong></li>
                        )}
                        <li className="total-cost">
                            <label>Estimated Total</label> <strong>${estimatedTotal.toFixed(2)}</strong>
                        </li>
                    </ul>
                    <button className="btn btn-ornage proceed_checkout">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutPricing