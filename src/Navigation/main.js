import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
// import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

/* NOTE:
1. Remove UUID hard code.

*/
import App from '../App';
import Homepage from '../Pages/Home/homePage';
// import SingleProduct from '../Pages/Products/productComponents/products_singleProduct';
// import AllProducts from '../Pages/Products/productComponents/products_allProducts';
// import Cart from '../Pages/Cart/cart';
// import EmptyCart from '../Pages/Cart/EmptyCart/emptyCart';
// import ExpressCheckout from '../Pages/ExpressCheckout/expressCheckout';
// import Login from '../Pages/Auth/Login/login';
// import Register from '../Pages/Auth/Register/register';
// import Forgot from '../Pages/Auth/Forgot/forgot';
// import UserDashboard from '../Pages/UserDashboard/userDashboard';
// import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';
//
// import About from '../Pages/Legal/about';
// import ContactUs from '../Pages/Legal/contactUs';
// import Phone from '../Pages/Legal/phone';
// import Reviews from '../Pages/Media/reviews';
// import UserStories from '../Pages/Media/userStories';
// import VapeNews from '../Pages/Media/vapeNews';
// import Faqs from '../Pages/Legal/faqs';
// import MissionStatement from '../Pages/Legal/missionStatement';
// import SocialMedia from '../Pages/Legal/socialMedia';
//
// import NicotineDisclaimer from '../Pages/Legal/nicotineDisclaimer';
// import Shipping from '../Pages/Legal/shippingPolicy';
// import Returns from '../Pages/Legal/returnsPolicy';
// import PrivacyPolicy from '../Pages/Legal/privacyPolicy';
// import TermsConditions from '../Pages/Legal/termsConditions';
// import Wholesale from '../Pages/Legal/wholesale';
// import Affiliates from '../Pages/Legal/affiliateProgram';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    {/* User Experience */}
    <Router path={'/home'} component={Homepage} />

  </Route>
);
