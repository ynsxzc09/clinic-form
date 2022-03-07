import React from "react";
import Preferences from "./Preferences";

function Dashboard({ setToken }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* {< Preferences />} */}
      <button
        onClick={() => {
          setToken(!true);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
