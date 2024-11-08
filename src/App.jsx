import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminAdd from "./pages/AdminAdd/AdminAdd";
import AdminList from "./pages/AdminList/AdminList";
import AdminOrders from "./pages/AdminOrders/AdminOrders";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyOrders from "./pages/MyOrders/MyOrders";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const url = "http://localhost:3125";

  //USER

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />

          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

  //ADMIN

  // return (
  //   <div>
  //     <ToastContainer />
  //     <AdminNavbar />
  //     <hr />
  //     <div className="app-content">
  //       <AdminSidebar />
  //       <Routes>
  //         <Route path="/add" element={<AdminAdd url={url} />} />
  //         <Route path="/list" element={<AdminList url={url} />} />
  //         <Route path="/orders" element={<AdminOrders url={url} />} />
  //       </Routes>
  //     </div>
  //   </div>
  // );
};

export default App;
