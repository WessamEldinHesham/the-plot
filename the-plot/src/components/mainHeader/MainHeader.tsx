import React from "react";
import { useNavigate } from "react-router-dom";

import "./MainHeader.css";

export default function MainHeader() {
  const navigate = useNavigate();

  function handleHomeRouting() {
    navigate("/");
  }

  return (
    <div>
      <header className="main-header">
        <h1 onClick={handleHomeRouting}>The Plot</h1>
      </header>
    </div>
  );
}
