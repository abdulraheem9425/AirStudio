import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import StorePage from "./pages/StorePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import RecordPage from "./pages/RecordPage";
import RegisterSellerPage from "./pages/RegisterSellerPage";
import AccountEdit from "./pages/AccountEdit";
import Message from "./pages/Message";
import DetailPage from "./pages/DetailPage";
import MessageChat from "./pages/MessageChat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="register-seller" element={<RegisterSellerPage />} />
        <Route path="account-edit" element={<AccountEdit />} />
        <Route path="message" element={<Message />} />
        <Route path="detail-card" element={<DetailPage />} />
        <Route path="message-chat" element={<MessageChat />} />
        <Route path="table" element={<RecordPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
