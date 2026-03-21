import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/", icon: "📊" },
  { name: "Transactions", path: "/transactions", icon: "💸" },
  { name: "Budget", path: "/budget", icon: "🎯" },
  { name: "Insights", path: "/insights", icon: "📈" },
  { name: "Settings", path: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-gray-200 bg-white transition-transform max-md:-translate-x-full">
      {/* Brand */}
      <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
        <span className="text-2xl">💰</span>
        <h1 className="text-xl font-bold text-gray-900">SpendWise</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="absolute bottom-0 w-full border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 rounded-lg px-4 py-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
