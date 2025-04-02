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
import {AdminDeleteOffer} from "./components/admin/AdminDeleteOffer";
import { ManageOffer } from "./components/admin/ManageOffer";
import { ResetPassword } from "./components/common/ResetPassword";
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
          <Route path="/delete" element={<AdminDeleteOffer/>}></Route>
          {/* <Route path="/manageoffer" element={<ManageOffer/>}></Route> */}
          <Route path="/manage-offers/:id" element={<ManageOffer/>}></Route>
          <Route path="/resetpassword/:token" element={<ResetPassword/>}></Route>
          
          
        </Routes>

      </div>
    </body>
  );
}

export default App;
