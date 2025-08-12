import GiftImage from "../../../assets/images/gift_ico.png";
import PricingSection from "../checkout/pricingSection";

const CartSummary = ({ subtotal = 430.0, delivery = 30.0, itemCount = 3 }) => {

    return (
        <>
            <PricingSection subtotal={subtotal} delivery={delivery} itemCount={itemCount} />
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

function CartSummaryMain() {
    return (
        <CartSummary subtotal={430} delivery={30} itemCount={3} />
    );
}
export default CartSummaryMain;
