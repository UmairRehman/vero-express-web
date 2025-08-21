import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TempImage from '../../../assets/images/prod3.jpg'
import CartItem from "../cart/cart.product";
import { message } from 'antd';
import { deleteCartItem, getCart, updateBasket } from "../../../services/basket";
import DroneImage from '../../../assets/images/ico-fx.png';
import RiderImage from '../../../assets/images/ico-ship.png';
import StepOneImage from '../../../assets/images/sign-step1.png';
import StepTwoImage from '../../../assets/images/sign-step2.png';
import StepThreeImage from '../../../assets/images/sign-step3.png';
import MasterImage from "../../../assets/images/master.png";
import PaypalImage from "../../../assets/images/paypal.png";
import VisaImage from "../../../assets/images/visa.png";
import AmericanImage from "../../../assets/images/american.png";
import ChipImage from "../../../assets/images/chip.png";
import WalletIcon from "../../../assets/images/wallet_ico.png";
import ShippingExpectedDate from "./shippingExpectedDate";
import AddressModal from "../../shared/addressModal";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import { updateUserAddresses } from "../../../services/user";
import { getWallet, addCardToWallet } from "../../../services/wallet";
import { Authenticate } from "../../../redux/feature/authSlice";
import { getSelectedStoreDetails } from "../../../redux/feature/stores";
import AddCardForm from "./addCardForm";

const CheckoutSteps = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeStep, setActiveStep] = useState("shipping");
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(""); // Add state for delivery method
    const [addressModalVisible, setAddressModalVisible] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [savedCards, setSavedCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [loadingCards, setLoadingCards] = useState(false);
    const [addCardModalVisible, setAddCardModalVisible] = useState(false);
    const addCardFormRef = useRef();
    const { navigate } = useNavigate();
    const {
        selectedStore
    } = useSelector(getSelectedStoreDetails) || null;
    const user = useSelector(state => state.user.user);
    const userAddresses = user?.addresses || [];
    const dispatch = useDispatch();

    // Get store name from URL parameters

    const storeName = selectedStore.display_name || null;

    useEffect(() => {
        if (!storeName) {
            message.error("Store name is not available. Please select a store to proceed.");
            navigate("./")
        }
    }, [])

    useEffect(() => {
        if (activeStep === "payment") {
            fetchSavedCards();
        }
    }, [activeStep]);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    // Add handler for delivery method selection
    const handleDeliveryMethodChange = (method) => {
        setSelectedDeliveryMethod(method);
    };

    // Address modal handlers
    const showAddressModal = () => {
        setAddressModalVisible(true);
    };

    const hideAddressModal = () => {
        setAddressModalVisible(false);
    };

    const handleAddressSuccess = () => {
        hideAddressModal();
        // Optionally refresh addresses or update UI
    };

    // Add Card modal handlers
    const showAddCardModal = () => {
        setAddCardModalVisible(true);
    };

    const hideAddCardModal = () => {
        setAddCardModalVisible(false);
        // Reset form when closing modal
        if (addCardFormRef.current) {
            addCardFormRef.current.resetFields();
        }
    };

    const handleAddCardSubmit = async (values) => {
        try {
            // Format the data according to API requirements
            const cardData = {
                number: values.cardNumber.replace(/\s/g, ''), // Remove spaces from card number
                exp_month: values.expiryDate.format('MM'), // Extract month from dayjs object
                exp_year: values.expiryDate.format('YY'), // Extract year from dayjs object
                cvc: values.cvv,
                name: values.cardholderName
            };

            // Call API to add the card
            const response = await addCardToWallet(cardData);

            if (response.data && response.data.success) {
                message.success('Card added successfully!');
                hideAddCardModal();
                // Refresh the saved cards
                await fetchSavedCards();
            } else {
                message.error(response.data?.message || 'Failed to add card. Please try again.');
            }
        } catch (error) {
            console.error('Error adding card:', error);
            message.error('Failed to add card. Please try again.');
        }
    };

    // Fetch saved cards
    const fetchSavedCards = async () => {
        try {
            setLoadingCards(true);
            const response = await getWallet();
            if (response.data && response.data.success) {
                console.log("Saved cards response:", response.data);
                const cards = response.data.data.data.cards || [];
                setSavedCards(cards);
                // Set default card if available
                if (cards.length > 0) {
                    setSelectedCard(cards[0].id);
                }
            }
        } catch (error) {
            message.error('Failed to load saved cards');
        } finally {
            setLoadingCards(false);
        }
    };

    const handleAddressSelect = (addressId) => {
        setSelectedAddress(addressId);
    };

    // Handle card selection
    const handleCardSelect = (cardId) => {
        setSelectedCard(cardId);
        // Find the selected card details
        const selectedCardDetails = savedCards.find(card => card.id === cardId);
        if (selectedCardDetails) {
            message.success(`Selected ${selectedCardDetails.brand} card ending in ${selectedCardDetails.last4}`);
        }
    };

    // Handle address deletion
    const handleDeleteAddress = async (addressIdToDelete) => {
        try {
            // Filter out the address to be deleted
            const updatedAddresses = userAddresses.filter(address => address._id !== addressIdToDelete);

            // Call API to update user addresses
            const response = await updateUserAddresses({
                addresses: updatedAddresses
            });

            if (response.data && response.data.success) {
                message.success("Address deleted successfully");
                const updatedUser = {
                    ...user,
                    addresses: updatedAddresses
                };
                dispatch(Authenticate(updatedUser));

                // If the deleted address was selected, clear the selection
                if (selectedAddress === addressIdToDelete) {
                    setSelectedAddress(null);
                }
            } else {
                message.error("Failed to delete address");
            }
        } catch (error) {
            message.error("Failed to delete address");
        }
    };


    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const response = await getCart();
            if (response.data && response.data.data.basket) {
                const basket = response.data.data.basket;
                const processedItems = basket.items.map(item => {
                    // Use API data with static fallbacks for missing values
                    return {
                        id: item._id || `item_${Date.now()}`,
                        category: item.category || "General",
                        title: item.title || "Product",
                        image: item.image || TempImage,
                        price: item.price || 25.0,
                        originalPrice: item.originalPrice || 35.0,
                        stock: item.stock || "In Stock",
                        quantity: item.quantity || 1,
                    };
                });

                setCartItems(processedItems);
            } else {
                message.error("No basket data found");
                setCartItems([]);
            }
        } catch (error) {
            setError('Failed to load cart items');
            message.error("Failed to load cart items");
            setCartItems([]);
        } finally {
            setLoading(false);
        }
    };

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
            console.error("Error updating cart:", error);
            message.error("Failed to update cart");
            // Revert local state if API call failed
            await fetchCartItems();
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

    return (
        <div className="check-add custom-nav">
            <ul className="nav nav-tabs">
                <li onClick={() => handleStepClick("shipping")}>
                    <a className={activeStep === "shipping" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src={StepOneImage} alt="" />
                        </span>
                        <b>Shipping</b>
                        <span>Address Details</span>
                    </a>
                    <i className="fas fa-chevron-right"></i>
                </li>

                <li onClick={() => handleStepClick("delivery")}>
                    <a className={activeStep === "delivery" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src={StepTwoImage} alt="" />
                        </span>
                        <b>Delivery</b>
                        <span>Delivery Method</span>
                    </a>
                    <i className="fas fa-chevron-right"></i>
                </li>

                <li onClick={() => handleStepClick("payment")}>
                    <a className={activeStep === "payment" ? "active" : ""} href="#">
                        <span className="sign-ico">
                            <img src={StepThreeImage} alt="" />
                        </span>
                        <b>Payment</b>
                        <span>Payment Method</span>
                    </a>
                </li>
            </ul>

            <div className="tab-content">
                {activeStep === "shipping" && (
                    <div className="tab-pane active" id="shipping">
                        {/* <h4 className="chk_h4">1. Shipping, arrives between Mon, May 16—Tue, May 24</h4> */}
                        <ShippingExpectedDate />
                        <div className="chk_list_add">
                            <h5>Shipping address <span>Where should we deliver your order?</span></h5>
                            <Button className="btn btn-lgreen" onClick={showAddressModal}>+ Add New Address</Button>
                        </div>
                        <div className="chk_blklist">
                            {userAddresses.length > 0 ? (
                                userAddresses.map((address) => (
                                    <div className="chk_list_blk" key={address._id}>
                                        <div className="chk_input_chk">
                                            <input
                                                type="radio"
                                                name="selectedAddress"
                                                className="chk_chk"
                                                checked={selectedAddress === address._id}
                                                onChange={() => handleAddressSelect(address._id)}
                                            />
                                            <h6>{address.display_name} <span>{address.formatted_location}</span></h6>
                                        </div>
                                        <a className="chk_edit" href="#" onClick={(e) => { e.preventDefault(); handleDeleteAddress(address._id); }}><DeleteOutlined /> Delete</a>
                                    </div>
                                ))
                            ) : (
                                <div className="chk_list_blk">
                                    <div className="chk_input_chk">
                                        <h6>No addresses found <span>Please add a shipping address to continue</span></h6>
                                    </div>
                                </div>
                            )}
                        </div>

                        {userAddresses.length === 0 && (
                            <div className="alert alert-info mt-3">
                                <i className="fa fa-info-circle me-2"></i>
                                You need to add at least one shipping address to proceed with checkout.
                            </div>
                        )}

                        {selectedAddress && (
                            <div className="alert alert-success mt-3">
                                <i className="fa fa-check-circle me-2"></i>
                                Shipping address selected: <strong>{userAddresses.find(addr => addr._id === selectedAddress)?.display_name}</strong>
                            </div>
                        )}

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

                        <div className="btn-nex-prev d-flex justify-content-end mt-4">
                            <Button
                                className=" btn btn-lgreen"
                                variant="primary"
                                onClick={() => setActiveStep("delivery")}
                                disabled={!selectedAddress || userAddresses.length === 0}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                )}

                {activeStep === "delivery" && (
                    <div className="tab-pane active" id="delivery">
                        <ShippingExpectedDate />
                        <div className="delivery-list">
                            {selectedAddress && userAddresses.find(addr => addr._id === selectedAddress) ? (
                                <div className="delivery-blk">
                                    <Row>
                                        <Col md={6}>
                                            <h6>{userAddresses.find(addr => addr._id === selectedAddress).display_name}</h6>
                                            <p>{userAddresses.find(addr => addr._id === selectedAddress).formatted_location}</p>
                                        </Col>
                                        <Col md={6}>
                                            <input type="checkbox" className="del_chk" checked={true} readOnly />
                                        </Col>
                                    </Row>
                                </div>
                            ) : (
                                <div className="delivery-blk">
                                    <Row>
                                        <Col md={12}>
                                            <p className="text-muted">Please select a shipping address from the previous step</p>
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </div>

                        <h4 className="chk_h4">2. Shipping method</h4>
                        <div className="delivery-sm">
                            <h5>Available Shipping method</h5>
                            <div className="delivery-grey">
                                <Row>
                                    <Col md={6}>
                                        <div className="deliv-img">
                                            <img src={RiderImage} alt="" />
                                        </div>
                                        <div className="deliv-text">
                                            <h6>Delivery by Driver</h6>
                                            <p>Delivery: 2-3 Working Days</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <label className="del-gr">
                                            {"Free"}
                                            <input
                                                type="radio"
                                                name="deliveryMethod"
                                                value="driver"
                                                checked={selectedDeliveryMethod === "driver"}
                                                onChange={() => handleDeliveryMethodChange("driver")}
                                                className="del_chk"
                                            />
                                        </label>
                                    </Col>
                                </Row>
                            </div>
                            <div className="delivery-grey">
                                <Row>
                                    <Col md={6}>
                                        <div className="deliv-img">
                                            <img src={DroneImage} alt="" />
                                        </div>
                                        <div className="deliv-text">
                                            <h6>Delivery by Drone</h6>
                                            <p>Delivery: 2-3 Working Days</p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <label className="del-gr">
                                            {"$12.00"}
                                            <input
                                                type="radio"
                                                name="deliveryMethod"
                                                value="drone"
                                                checked={selectedDeliveryMethod === "drone"}
                                                onChange={() => handleDeliveryMethodChange("drone")}
                                                className="del_chk"
                                            />
                                        </label>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="btn-nex-prev">
                            <Button variant="secondary" onClick={() => setActiveStep("shipping")}>Back</Button>
                            <Button
                                variant="primary"
                                onClick={() => setActiveStep("payment")}
                                disabled={!selectedDeliveryMethod} // Disable continue button if no delivery method selected
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                )}

                {activeStep === "payment" && (
                    <div className="tab-pane active" id="payment">
                        <h4 className="chk_h4">3. Payment method</h4>
                        <div className="cart-picon">
                            <ul className="pays-list">
                                <li className="pactive">
                                    <img className="master" src={MasterImage} alt="" />
                                </li>
                                <li className="">
                                    <img className="paypal" src={PaypalImage} alt="" />
                                </li>
                                <li className="">
                                    <img className={"visa"} src={VisaImage} alt="" />
                                </li>
                                <li className="">
                                    <img className={"american"} src={AmericanImage} alt="" />
                                </li>
                            </ul>
                            <Button
                                onClick={showAddCardModal}
                                className="btn btn-green">Add New</Button>
                        </div>
                        <div className="mt-3" id="payment">
                            <h4 className="chk_h4">Save Cards</h4>

                            {/* Saved Cards Section */}
                            <div className="saved-cards-section">
                                {loadingCards ? (
                                    <div className="text-center py-4">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : savedCards.length > 0 ? (
                                    <div className="row">
                                        {savedCards.map((card) => (
                                            <div key={card.id} className="col-md-4 mb-3">
                                                <div
                                                    className={`wallet-item ${selectedCard === card.id ? 'selected' : ''}`}
                                                    onClick={() => handleCardSelect(card.id)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <img
                                                        className="wallet_i"
                                                        src={card.brand === 'Visa' ? VisaImage :
                                                            card.brand === 'Mastercard' ? MasterImage :
                                                                card.brand === 'American Express' ? AmericanImage :
                                                                    MasterImage}
                                                        alt={card.brand}
                                                    />
                                                    <img className="wallet_chip" src={ChipImage} alt="" />
                                                    <h4>**** **** **** {card.last4}</h4>
                                                    <ul>
                                                        <li>
                                                            <label>Card Holder Name</label>
                                                            <span>{card.name || 'N/A'}</span>
                                                        </li>
                                                        <li>
                                                            <label>Expiry Date</label>
                                                            <span>{card.exp_month.toString().padStart(2, '0')} / {card.exp_year}</span>
                                                        </li>
                                                        <li>
                                                            <label>Brand</label>
                                                            <span>{card.brand}</span>
                                                        </li>
                                                    </ul>
                                                    <img className="wallet_ico" src={WalletIcon} alt="" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-4">
                                        <p className="text-muted">No saved cards found. Add a new card to get started.</p>
                                    </div>
                                )}

                                {/* Selected Card Summary */}
                                {selectedCard && (
                                    <div className="selected-card-summary mt-4">
                                        <h5 className="mb-3">Selected Card</h5>
                                        <div className="card p-3 bg-light">
                                            {(() => {
                                                const selectedCardDetails = savedCards.find(card => card.id === selectedCard);
                                                if (selectedCardDetails) {
                                                    return (
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={selectedCardDetails.brand === 'Visa' ? VisaImage :
                                                                    selectedCardDetails.brand === 'Mastercard' ? MasterImage :
                                                                        selectedCardDetails.brand === 'American Express' ? AmericanImage :
                                                                            MasterImage}
                                                                alt={selectedCardDetails.brand}
                                                                style={{ width: '40px', height: 'auto', marginRight: '15px' }}
                                                            />
                                                            <div>
                                                                <h6 className="mb-1">{selectedCardDetails.brand} •••• {selectedCardDetails.last4}</h6>
                                                                <p className="mb-1 text-muted">
                                                                    {selectedCardDetails.name || 'N/A'} • Expires {selectedCardDetails.exp_month.toString().padStart(2, '0')}/{selectedCardDetails.exp_year}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })()}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Address Modal */}
            <AddressModal
                visible={addressModalVisible}
                onCancel={hideAddressModal}
                onSuccess={handleAddressSuccess}
            />

            {/* Add Card Modal */}
            <Modal show={addCardModalVisible} onHide={hideAddCardModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCardForm
                        handleAddCardSubmit={handleAddCardSubmit}
                        formRef={addCardFormRef}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideAddCardModal}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => addCardFormRef.current?.submit()}
                        className="btn btn-green"
                    >
                        Add Card
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default CheckoutSteps;
