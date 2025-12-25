import React from "react";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://9e5f6422-9f96-44c0-92a8-e67034fa147c.mock.pstmn.io/customer",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();
        console.log("Response:", data);

        setuser(data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="glass-card">
      <h5>Latest Projects Data</h5>
      <table className="table table-dark table-hover mt-3">
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Email</th>
             <th>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((user) => {
            
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <span className="badge bg-success">{user.name}</span>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Customer Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;



