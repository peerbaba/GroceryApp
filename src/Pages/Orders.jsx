import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://9e5f6422-9f96-44c0-92a8-e67034fa147c.mock.pstmn.io/order")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = () => setShow(true);
  const onClose = () => setShow(false);

  const onSave = () => {
    console.log("saved");
    setShow(false); // ✅ FIX
  };

  return (
    <div className="glass-card">
      <h5>Latest Orders List</h5>

      <table className="table table-dark table-hover mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>OrderID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Item</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.amount}</td>
              <td>{a.customer}</td>
              <td>{a.date}</td>
              <td>{a.product}</td>
              <td>{a.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ MODAL */}
      {show && (
  <div
    className="modal fade show d-block"
    tabIndex="-1"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">Update Order</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="modal-body">
          <input className="form-control" placeholder="Name" />
        </div>
        <div className="modal-body">
          <input className="form-control" placeholder="Order" />
        </div>
<div className="modal-body">
          <input className="form-control" placeholder="New Order" />
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={onSave}>
            Save
          </button>
        </div>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Orders;
