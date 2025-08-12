import './App.css';
import './assets/css/style-block1.css';
import './assets/css/custom-styling.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './container/itemPurchase/home';
import SignupPage from './container/auth/signup';
import PhoneLogin from './container/auth/login/phoneLogin';
import OtpVerification from './container/auth/login/otp';
import ItemExplore from './container/itemPurchase/item-purchase';
import Shop from './container/itemPurchase/shop';
import ProductDetails from './container/itemPurchase/product-details';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartDetails from './container/itemPurchase/cart-details';
import Checkout from './container/itemPurchase/checkout';
import Tracking from './container/itemPurchase/tranching';
import Compare from './container/itemPurchase/compare';
import Landing from './container/parcel-delivery/landing';
import DeliveryOrder from './container/parcel-delivery/order';
import Dashboard from './container/dashboard';
import DashboardLayout from './container/layouts/dashboardLayout';
import Wallet from './container/dashboard/wallet';
import Booking from './container/dashboard/booking';
import BookingDetails from './container/dashboard/booking/booking-details';
import Profile from './container/dashboard/profile';
import Support from './container/dashboard/support';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item-purchase" element={<Home />} />
          <Route path="/item-purchase/explore" element={<ItemExplore />} />
          <Route path="/item-purchase/shop" element={<Shop />} />
          <Route path="/item-purchase/product-details" element={<ProductDetails />} />
          <Route path="/item-purchase/cart-details" element={<CartDetails />} />
          <Route path="/item-purchase/checkout" element={<Checkout />} />
          <Route path="/item-purchase/tracking" element={<Tracking />} />
          <Route path="/item-purchase/compare" element={<Compare />} />

          {/* // Parcel Delivery */}
          <Route path="/parcel-delivery" element={<Landing />} />
          <Route path="/parcel-delivery/order" element={<DeliveryOrder />} />




          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout> <Dashboard /> </DashboardLayout>} />
          <Route path="/dashboard/wallet" element={<DashboardLayout> <Wallet /> </DashboardLayout>} />
          <Route path="/dashboard/booking" element={<DashboardLayout> <Booking /> </DashboardLayout>} />
          <Route path="/dashboard/profile" element={<DashboardLayout> <Profile /> </DashboardLayout>} />
          <Route path="/dashboard/support" element={<DashboardLayout> <Support /> </DashboardLayout>} />



          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/login" element={<PhoneLogin />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OtpVerification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
