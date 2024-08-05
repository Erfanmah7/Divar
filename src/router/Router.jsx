import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import DashboardPages from "../pages/DashboardPages";
import AdminPages from "../pages/AdminPages";
import NotFoundPages from "../pages/NotFoundPages";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading, error });
  

  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/dashboard" element={<DashboardPages />} />
      <Route path="/admin" element={<AdminPages />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
}

export default Router;
