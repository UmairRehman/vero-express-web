import GiftImage from "../../../assets/images/gift_ico.png";
import PricingSection from "../checkout/pricingSection";

const CartSummary = ({ subtotal, itemCount }) => {

    return (
        <>
            <PricingSection subtotal={subtotal} itemCount={itemCount} />
            <div className="cart-gift">
                <div className="cart-img">
                    <img className="cart_gift" src={GiftImage} alt="Gift icon" />
                </div>
                <div className="cart-txt">
                    <h5>Send this order as a gift.</h5>
                    <p>Available items will be shipped to your gift recipient.</p>
                </div>
            </div>
        </>
    );
};

function CartSummaryMain({ cartItems }) {
    // Assuming cartItems is passed as a prop, you can use it to calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <CartSummary subtotal={subtotal} itemCount={cartItems?.length} />
    );
}
export default CartSummaryMain;
