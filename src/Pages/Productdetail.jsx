import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Productdetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");
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
