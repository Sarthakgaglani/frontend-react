import React from "react";

import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import axios from "axios";
import { UserSidebar } from "./components/layouts/UserSidebar";
import { Route, Routes } from "react-router-dom";
import { LogIn } from "./components/common/LogIn";
// import { AddOffer } from "./components/resturant/AddOffer";
import { SignUp } from "./components/common/SignUp";
//import { Home } from "./components/HomeComponents/Home";
import { PocketBuddyHome } from "./components/Home/PocketBuddyHome";
import { HeroSection } from "./components/resturant/HeroSection";
// import { ContactUs } from "./components/Home/ContactUs";
import { RestaurantForm } from "./components/common/RestaurantForm";
import { ContactForm } from "./components/Home/ContactForm";
import { AboutUs } from "./components/Home/AboutUs";
import { Location} from "./components/common/Location";
import { TopDeals } from "./components/Home/TopDeals";
// import { Admin } from "./components/admin/Admin";
import { DealDetails } from "./components/Home/DealDetails";
import { MyOffer } from "./components/Home/MyOffer";
import { Landing } from "./components/Home/Landing";

import { ResetPassword } from "./components/common/ResetPassword";
import { Deals } from "./components/Home/Deals";
import { IndianFood } from "./components/Home/IndianFood";
import { RestaurantHome } from "./components/resturant/RestaurantHome";
import { AddRestaurant } from "./components/resturant/AddRestaurant";
import { AddOffer } from "./components/Home/AddOffer";
import { Charts } from "./components/Home/Charts";
import { AdminDashboard } from "./components/Admins/AdminDashboard";
import ManageOffers  from "./components/Admins/ManageOffers";
import ManageRestaurants  from "./components/Admins/ManageRestaurants";
import  ManageUsers  from "./components/Admins/ManageUsers";
import UpdateOffer from "./components/Admins/UpdateOffer";
import Restaurant from "./components/resturant/Restaurant";
import { RestSign } from "./components/resturant/RestSign";
// import { Details } from "./components/Home/Details";

// import { ContactUs } from "./components/Home/ContactUs";



function App() {

  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <body className='class="lay out-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded"'>
      <div className="app-wrapper">
        <Routes>
          <Route path="/login" element={<LogIn />} ></Route>
          <Route path="/user" element={<UserSidebar/>}></Route>
          {/* <Route path="/offer" element={<AddOffer/>}></Route> */}
          <Route path="/signup" element={<SignUp/>}></Route>
          {/*<Route path="/home" element={<Home/>}></Route>*/}
          <Route path="/home" element={<PocketBuddyHome/>}></Route>
          <Route path="/hero" element ={<HeroSection/>}></Route>
          {/* <Route path="/contact" element = {<ContactUs />}></Route> */}
          {/* <Route path="/contact" element={<ContactUs/>}></Route> */}
          <Route path="/restform" element ={<RestaurantForm/>}></Route>
          <Route path="/contact" element ={<ContactForm/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/location" element ={<Location/>}></Route>
          <Route path="/topdeals" element={<TopDeals/>}></Route>
          {/* <Route path="/admin" element={<Admin/>}></Route> */}
          {/* <Route path="/details" element={<Details  />}></Route> */}
          <Route path="/deal/:id" element={<DealDetails/>}></Route>
          <Route path="/myoffers" element={<MyOffer/>}></Route>
          <Route path="/" element={<Landing/>}></Route>
          {/* <Route path="/delete" element={<AdminDeleteOffer/>}></Route> */}
          {/* <Route path="/manageoffer" element={<ManageOffer/>}></Route> */}
          {/* <Route path="/manage-offers/:id" element={<ManageOffer/>}></Route> */}
          <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
          <Route path="/deals" element={<Deals/>}></Route>
          <Route path="/foodstalls" element={<IndianFood/>}></Route>
          <Route path="/resthome" element={<RestaurantHome/>}></Route>
          <Route path="/rest" element={<AddRestaurant/>}></Route>
          {/* <Route path="/" element={<AddOffer/>}></Route> */}
          <Route path="/useroffer" element={<AddOffer/>}></Route>
          <Route path="/chart" element={<Charts/>}></Route>
          <Route path="/admin/*" element={<AdminDashboard/>}></Route>
          <Route path="/offers" element={<ManageOffers/>}></Route>
          <Route path="/restaurants" element={<ManageRestaurants/>}></Route>
          <Route path="/users" element={<ManageUsers/>}></Route>
          <Route path="/update-offer/:id" element={<UpdateOffer/>}></Route>
          <Route path="/restaurant" element={<Restaurant/>}></Route>
          <Route path="/restsign" element={<RestSign/>}></Route>


        </Routes>

      </div>
    </body>
  );
}

export default App;
