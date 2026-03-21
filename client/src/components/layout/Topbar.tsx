/**
 * Topbar Component
 *
 * TODO: Replace placeholder user with actual auth state
 * TODO: Add notification bell with unread count
 * TODO: Add mobile menu toggle button
 */

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* TODO: Add mobile hamburger menu button */}
        <h2 className="text-lg font-semibold text-gray-900">
          Welcome back, John 👋
        </h2>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* TODO: Add notification bell */}
        <button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
          🔔
        </button>

        {/* TODO: Replace with actual user avatar/dropdown */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
