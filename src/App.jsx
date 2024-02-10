import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shops from "./Pages/shops";
import ShopCategories from "./Pages/ShopCategories";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Component/Footer/Footer";
import men_banner from "./Component/assets/banner_mens.png";
import women_banner from "./Component/assets/banner_women.png";
import kid_banner from "./Component/assets/banner_kids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shops />} />
          <Route
            path="/mens"
            element={<ShopCategories banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategories banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategories banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path=":ProductId" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
