import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContextProvider, useAppContext } from "../context/AppContext";


const Productdetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    searchQuery,
    setSearchQuery,
    cartCount,
    addItemToCart,
    axios,
  } = useAppContext();
 
const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: IMAGE SECTION */}
        <div className="flex flex-col items-center">
          <img
            src="/veg1.jpeg"
            alt="Vegetables"
            className="w-80 h-80 object-cover rounded-lg"
          />

          <div className="flex gap-3 mt-4">
            <img
              src="/veg1.jpeg"
              className="w-16 h-16 border rounded cursor-pointer"/>
            <img
              src="/veg1.jpeg"
              className="w-16 h-16 border rounded cursor-pointer"/>
            <img
              src="/veg1.jpeg"
              className="w-16 h-16 border rounded cursor-pointer"/>
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Fresh Organic Vegetables Pack
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(1,234 ratings)</span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-red-600">₹299</span>
            <span className="ml-3 line-through text-gray-400">₹499</span>
            <span className="ml-2 text-green-600 font-semibold">40% OFF</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-600">
            Fresh and Organic Vegetables directly from farms. Healthy,
            pesticide-free and packed with nutrients.
            <br />
            <br />
            <strong>Key Health Benefits:</strong>
            <br />
            1. Heart Health – Controls BP & cholesterol
            <br />
            2. Antioxidants – Reduce cancer risk
            <br />
            3. Skin Health – Improves collagen
            <br />
            4. Eye Health – Protects vision
            <br />
            5. Immunity – Boosts immune system
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                setModalType("cart");
                setOpenModal(true);
                addItemToCart( {
      id: 1,
      name: "Fruits",
      price: 79999,
      qty: 1,
      image: "data:image/jpeg;base64,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",
    })
                toast.success("Added to cart 🛒");
              }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Add to Cart
            </button>

            <button
              onClick={() => {
                setModalType("buy");
                setOpenModal(true);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold">
              Buy Now
            </button>
          </div>

          {/* Extra Info */}
          <div className="mt-6 text-sm text-gray-500">
            ✔ Free Delivery <br />
            ✔ Cash on Delivery <br />
            ✔ 7-day Return Policy
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg text-center">
            <h2 className="text-xl font-bold mb-3">
              {modalType === "cart"
                ? "Item Added to Cart 🛒"
                : "Proceed to Checkout"}
            </h2>

            <p className="text-gray-600 mb-6">
              {modalType === "cart"
                ? "Your product has been added successfully."
                : "Do you want to continue to checkout?"}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100">
                Cancel
              </button>

              <button
                onClick={() => {
                    setOpenModal(false)
                    navigate("/cart")

                }}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                {modalType === "cart" ? "Go to Cart" : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productdetail;
