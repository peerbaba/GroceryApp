import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Orders from "./Pages/Orders";
import Parent from "./Pages/Parent";
import Protected from "./Pages/Protected";
import Analytics from "./Pages/Analytics";
import FrontPage from "./Pages/FrontPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Vegetable from "./Pages/Vegetable";
import Productdetail from "./Pages/Productdetail";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <div className={"px-6 md:px-16 lg:px-24 xl:px-32"}>
        <Routes>
          <Route
            path="/home"
            element={
              <Protected>
                <Parent>
                  <Home />
                </Parent>
              </Protected>
            }
          />
          <Route
            path="/user"
            element={
              <Parent>
                <User />
              </Parent>
            }
          />
          <Route
            path="/orders"
            element={
              <Parent>
                <Orders />
              </Parent>
            }
          />
          <Route
            path="/analytics"
            element={
              <Parent>
                <Analytics />
              </Parent>
            }
          />

          <Route path="/" element={<FrontPage />} />
          <Route path="/products/:product" element={<Vegetable />} />
           <Route path="/products/:product/productdetail" element={<Productdetail />} />
           <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
