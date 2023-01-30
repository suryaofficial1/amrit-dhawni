import { useMediaQuery } from "react-responsive";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./app.scss";
import NewFooter from "./components/Footer/NewFooter";
import Header from "./components/header/Header.js";
import AboutUs from "./pages/Aboutus/Aboutus";
import AllProducts from './pages/AllProducts/AllProducts';
import { ContactUs } from "./pages/Contact/ContactUs";
import Home from "./pages/Home/Home";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Return from "./pages/ReturnPolicy/Return";
import Shipping from './pages/ShippingPolicy/Shipping';
import Terms from './pages/Terms&Cond/Terms';

const Layout = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  return (
    <div className="app">

      {/* {isTabletOrMobile?(<NavbarMobile/>):(<Nav />)} */}
      <Header />
      <Outlet />
      {/* {isTabletOrMobile?(<FooterMobile/>):(<Footer/>)} */}
      {(<NewFooter/>)}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/terms-condition",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/return-policy",
        element: <Return />,
      },
      {
        path: "/shipping-info",
        element: <Shipping />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
