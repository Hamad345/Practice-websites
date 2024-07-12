import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";



function App() {
 

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Users</h3>
        <div className="form-check">
         
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
           
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
     
    </div>
  );
}

export default App;
