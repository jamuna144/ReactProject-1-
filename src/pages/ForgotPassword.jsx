import { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrors({ email: "Email is required" });
      setMessage("");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors({ email: "Please enter a valid email" });
      setMessage("");
      return;
    }

    setErrors({});
    setMessage(
      "If an account exists, a reset link has been sent to your email.",
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <AuthHeader
            title="Forgot Password"
            subtitle="Enter your email to receive a reset link"
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {message && (
              <p className="text-green-600 text-sm leading-6">{message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          <p className="text-center text-gray-700 mt-6 text-sm">
            Remembered your password?{" "}
            <Link to="/login" className="text-black font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
