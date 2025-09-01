import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

function PricingSection({ subtotal, itemCount }) {
    const navigate = useNavigate();
    const [appliedCode, setAppliedCode] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);
    const handleApplyPromo = () => {
        if (promoCode.toLowerCase() === "save10") {
            setDiscount(0.1 * subtotal);
            setAppliedCode(promoCode);
        } else {
            setDiscount(0);
            setAppliedCode("Invalid code");
        }
    };
    const estimatedTotal = subtotal;

    return (
        <>
            <div className="cart-pbx">
                <div className="cart-promo-bx">
                    <label>Promo Code</label>
                    <div className="promo-bx">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Promo Code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button className="promo-apply" onClick={handleApplyPromo}>Apply</button>
                    </div>
                    {appliedCode && (
                        <div className="text-muted mt-1">
                            {appliedCode === "Invalid code" ? (
                                <small style={{ color: "red" }}>{appliedCode}</small>
                            ) : (
                                <small style={{ color: "green" }}>Applied: {appliedCode}</small>
                            )}
                        </div>
                    )}
                </div>

                <div className="cart-uls">
                    <ul>
                        <li><label>Subtotal (items)</label> <strong>{itemCount}</strong></li>
                        <li><label>Price (Total)</label> <strong>${subtotal.toFixed(2)}</strong></li>
                        {/* <li><label>Delivery</label> <strong>${delivery.toFixed(2)}</strong></li> */}
                        {discount > 0 && (
                            <li><label>Discount</label> <strong>- ${discount.toFixed(2)}</strong></li>
                        )}
                        <li className="total-cost">
                            <label>Estimated Total</label> <strong>${estimatedTotal.toFixed(2)}</strong>
                        </li>
                    </ul>
                    <button onClick={() => navigate("/item-purchase/checkout")} className="btn btn-ornage proceed_checkout">Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default PricingSection