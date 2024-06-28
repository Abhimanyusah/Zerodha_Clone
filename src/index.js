import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import PricingPage from './landing_page/pricing/PriceingPage';
import SupportPage from './landing_page/support/SupportPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<HomePage/>}> </Route>
  <Route path="/signup" element={<Signup/>}> </Route>
  <Route path="/about" element={<Aboutpage/>}> </Route>
  {/* <Route path="/products" element={<ProductsPage />}> </Route> */}
  <Route path="/pricing" element={<PricingPage/>}> </Route>
  <Route path="/support" element={<SupportPage/>}> </Route>





 </Routes>
 </BrowserRouter>
);


