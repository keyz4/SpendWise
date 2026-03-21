import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Login Page
 *
 * TODO: Connect to backend auth API
 * TODO: Handle JWT storage
 * TODO: Add form validation
 * TODO: Redirect to dashboard on successful login
 * TODO: Show error messages
 */

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend auth API
    // TODO: Handle JWT storage
    console.log("Login submitted:", { email, password });
    alert("Login not implemented yet. See TODO comments in the code.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <span className="text-5xl">💰</span>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to your SpendWise account
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          {/* TODO: Add form validation */}
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* TODO: Add "Forgot password?" link */}
          <div className="mt-4 text-right">
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign In
          </button>

          <p className="mt-4 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
