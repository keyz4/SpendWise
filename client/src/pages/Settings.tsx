/**
 * Settings Page
 *
 * TODO: Implement profile update functionality
 * TODO: Implement password change
 * TODO: Add notification preferences
 * TODO: Add currency/locale settings
 * TODO: Connect to backend settings API
 */

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-500">Manage your account preferences</p>
      </div>

      {/* Profile Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Profile</h3>
        <p className="text-sm text-gray-500">Update your personal information</p>
        {/* TODO: Implement profile update */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              defaultValue="John Doe"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          Save Changes
        </button>
      </div>

      {/* Security Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Security</h3>
        <p className="text-sm text-gray-500">Update your password</p>
        {/* TODO: Implement password change */}
        <div className="mt-4 max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
        <button className="mt-4 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700">
          Update Password
        </button>
      </div>

      {/* Preferences Section */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
        <p className="text-sm text-gray-500">Customize your experience</p>
        {/* TODO: Implement preference toggles */}
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive budget alerts via email</p>
            </div>
            {/* TODO: Implement toggle switch */}
            <button className="relative h-6 w-11 rounded-full bg-gray-300 transition-colors">
              <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Currency</p>
              <p className="text-xs text-gray-500">Set your preferred currency</p>
            </div>
            <select className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="INR">INR (₹)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-red-600">Danger Zone</h3>
        <p className="text-sm text-gray-500">Irreversible actions</p>
        <div className="mt-4">
          {/* TODO: Implement account deletion */}
          <button className="rounded-lg border border-red-300 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
