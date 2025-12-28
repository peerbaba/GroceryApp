import React, { useState } from "react";
import { AppContextProvider, useAppContext } from "../context/AppContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
  ]);
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
      getCartItems
    } = useAppContext();

  
  // Charges
  const DELIVERY_FEE = 99;
  const DISCOUNT = 500;

  // Increase qty
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease qty
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const totalAmount =
    subtotal > 0 ? subtotal + DELIVERY_FEE - DISCOUNT : 0;

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20,backgroundColor: "#f2e8e8ff",color:"black"  }}>
      <h2 style={{ marginBottom: 20, color:"black" }}>🛒 My Cart</h2>

      {getCartItems().length === 0 && <p>Your cart is Empty</p>}

      {getCartItems().map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ddd",
            padding: "15px 0",
            gap: 19,
          }}
        >
          <img src={item.image} alt={item.name} width="90" />

          <div style={{ flex: 1 }}>
            <h4 style={{ margin: "0 0 5px 0",  }}>{item.name}</h4>
            <p style={{ margin: "0 0 10px 0",  }}>₹{item.price.toLocaleString()}</p>

            {/* Quantity Buttons */}
            <button
              onClick={() => decreaseQty(item.id)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: 4,
                border: "1px solid #f5c3c3ff",
                backgroundColor: "#fad3d3ff",
              }}
            >
              -
            </button>
            <span style={{ margin: "0 10px", fontWeight: "bold",   }}>{item.qty}</span>
            <button
              onClick={() => increaseQty(item.id)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
                fontWeight: "bold",
                borderRadius: 4,
                border: "1px solid #ccc",
                backgroundColor: "#f6cfcfff",
              }}
            >
              +
            </button>
          </div>

          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "0 0 5px 0" }}>
              <b>₹{(item.price * item.qty).toLocaleString()}</b>
            </p>
            <button
              onClick={() => removeItem(item.id)}
              style={{
                padding: "5px 10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              ❌ Remove
            </button>
          </div>
        </div>
      ))}

      {/* PRICE SUMMARY */}
      {getCartItems().length > 0 && (
        <div
          style={{
            marginTop: 25,
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 6,
          }}
        >
          <h3 style={{ marginBottom: 15 }}>Price Details</h3>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span>Delivery Fee</span>
            <span>₹{DELIVERY_FEE}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "green",
              marginBottom: 8,
            }}
          >
            <span>Discount</span>
            <span>- ₹{DISCOUNT}</span>
          </div>

          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            <span>Total Payable</span>
            <span>₹{totalAmount.toLocaleString()}</span>
          </div>

          <button
            style={{
              width: "100%",
              marginTop: 15,
              padding: 12,
              backgroundColor: "#ff9f00",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
              borderRadius: 4,
            }}
            onClick={() => alert("Proceeding to Checkout 🚀")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
