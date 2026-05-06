import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";

import AppLayout from "@/components/layout/AppLayout";

import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",

    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
]);
