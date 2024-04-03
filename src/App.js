import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Page/Header.js";
import Footer from "./Page/Footer.js";
import Home from "./Page/Home.js";
import Product from "./Page/Product.js";
import Checkout from "./Page/Checkout.js";
import Account from "./Page/Account.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="Product" element={<Product />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="Account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
