import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
