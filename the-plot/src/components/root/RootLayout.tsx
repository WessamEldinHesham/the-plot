import React from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "../mainHeader/MainHeader";

import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
