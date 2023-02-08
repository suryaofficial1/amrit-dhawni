import React, { lazy, Suspense } from "react";
import { Loader } from "react-overlay-loader";
import { Route, Routes } from "react-router-dom";


const Home = lazy(() => import("./pages/Home/Home"));
const AboutUs = lazy(() => import("./pages/Aboutus/Aboutus"));
const AllProducts = lazy(() => import("./pages/AllProducts/AllProducts"));
const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));
const Privacy = lazy(() => import("./pages/PrivacyPolicy/Privacy"));
 const Product = lazy(() => import("./pages/Product/Product"));
// const List = lazy(()=> import("../src/components/List/List"))
 const Products = lazy(() => import("./pages/Products/Products"));
const Return = lazy(() => import("./pages/ReturnPolicy/Return"));
const Shipping = lazy(() => import("./pages/ShippingPolicy/Shipping"));
const Terms = lazy(() => import("./pages/Terms&Cond/Terms"));
const NoMatch = lazy(() => import("./pages/no-match/no-match"));


const Router = () => (
  <Suspense fallback={<Loader loading={true} className="loader" />}>
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/products/:id" element={<Products />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/allproducts/:catId" element={<AllProducts />} />
      <Route path="/allproducts/:catId/:subCatId" element={<AllProducts />} />
      <Route path="/privacy-policy" element={<Privacy />} />
     <Route path="/product/:id" element={<Product />} />

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/return-policy" element={<Return />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/shipping-info" element={<Shipping />} />
      <Route path="/terms-condition" element={<Terms />} />
      
      <Route path='*' element={<NoMatch />} status={404} />
    </Routes>
  </Suspense>
);

export default Router;
