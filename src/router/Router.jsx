import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import DashboardPages from "../pages/DashboardPages";
import AdminPages from "../pages/AdminPages";
import NotFoundPages from "../pages/NotFoundPages";
import AuthPage from "../pages/AuthPage";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import Loader from "../components/module/Loader";


function Router() {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  // console.log({ data, isLoading, error });
  if (isLoading) return <Loader/>;

  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route
        path="/dashboard"
        element={data ? <DashboardPages /> : <Navigate to="/auth" />}
      />
      //loading === data = false
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPages />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route path="*" element={<NotFoundPages />} />
    </Routes>
  );
}

export default Router;
