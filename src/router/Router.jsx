import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import DashboardPages from "../pages/DashboardPages";
import AdminPages from "../pages/AdminPages";
import NotFoundPages from "../pages/NotFoundPages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/dashboard" element={<DashboardPages />} />
      <Route path="/admin" element={<AdminPages />} />
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
}

export default Router;
