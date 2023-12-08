import "./App.css";
import { Layout } from "./Components/index";
import {
  Home,
  Shop,
  About,
  Contact,
  Whishlist,
  Signup,
  Cart,
  Login,
  ForgotPass,
} from "./Pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Home is th default child l2nu hatten INdex */}
            <Route path="shop" element={<Shop />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="whishlist" element={<Whishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="ForgotPass" element={<ForgotPass />} />
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
