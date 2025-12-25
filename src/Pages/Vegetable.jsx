import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Vegetable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://9e5f6422-9f96-44c0-92a8-e67034fa147c.mock.pstmn.io/customer"
        );
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 px-4">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div
            key={user.id || index}
            className="group cursor-pointer py-5 px-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition"
            style={{ backgroundColor: "yellowgreen" }}
            onClick = {()=> navigate("/products/vegetables/Productdetail")}
          >
            <img
              src="/veg1.jpeg"
              alt="Vegetable"
              className="max-w-28 transition group-hover:scale-110"
            />
            <p className="text-sm font-medium mt-2">
              {user.name || `Vegetable ${index + 1}`}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Vegetable;
