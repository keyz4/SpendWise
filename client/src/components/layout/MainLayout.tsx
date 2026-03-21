import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/**
 * MainLayout — wraps authenticated pages with sidebar + topbar
 *
 * TODO: Add auth guard to redirect unauthenticated users to /login
 * TODO: Add mobile responsive sidebar toggle
 */

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 max-md:ml-0">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
