const CartItem = ({ item, onQtyChange, onDelete }) => {
    return (
        <div className="cart-prod-item">
            <div className="cart-thumb">
                <a href="#"><img className="prod_img" src={item.image} alt="" /></a>
            </div>
            <div className="cart-text">
                <a className="cart_cat" href="#"><span>{item.category}</span></a>
                <a className="cart_title" href="#">{item.title}</a>
                <h5 className="cart-pro-total">${(item.price * item.quantity).toFixed(2)}</h5>
                <h6 className="cart-stock">${item.originalPrice.toFixed(2)} | <b>{item.stock}</b></h6>
                <div className="cart-qty">
                    <div className="qty-input">
                        <button onClick={() => onQtyChange(item.id, -1)} className="qty-count qty-count--minus">-</button>
                        <input
                            className="product-qty"
                            type="number"
                            value={item.quantity}
                            readOnly
                        />
                        <button onClick={() => onQtyChange(item.id, 1)} className="qty-count qty-count--add">+</button>
                    </div>
                    <div className="cart_sv_de">
                        <a className="cart_save"><i className="fa fa-heart"></i> Save</a>
                        <a className="cart_del" onClick={() => onDelete(item.id)}><i className="fa fa-trash"></i> Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartItem;