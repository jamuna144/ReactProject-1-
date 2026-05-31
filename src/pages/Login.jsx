import { useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Login attempt:", { email, password });
      // Add your login logic here
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-10 text-slate-100"
      style={{
        backgroundImage:
          "radial-gradient(circle at top, rgba(16,185,129,0.16), transparent 30%), radial-gradient(circle at 20% 20%, rgba(56,189,248,0.12), transparent 26%), linear-gradient(135deg, #020617 0%, #0f172a 48%, #111827 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-lg">
        {/* Card Container */}
        <div className="rounded-4xl border border-white/15 bg-white/95 p-8 text-slate-900 shadow-[0_30px_100px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 flex items-center justify-between rounded-2xl border border-emerald-200/70 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-600">
                Secure access
              </p>
              <p className="mt-1 font-medium text-emerald-950">
                Pick up where you left off.
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              Fast sign in
            </span>
          </div>

          <AuthHeader
            title="Welcome Back"
            subtitle="Sign in to your library account"
          />

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-700">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 cursor-pointer rounded border-slate-300 text-emerald-500 focus:ring-emerald-200"
                />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="font-semibold text-emerald-700 transition hover:text-emerald-600"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-linear-to-r from-emerald-500 via-cyan-500 to-sky-500 py-3 font-bold text-white shadow-lg shadow-emerald-500/30 transition duration-300 hover:brightness-110"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-3 text-sm text-slate-400">OR</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* Social Login (Optional) */}
          <div className="space-y-3">
            <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-medium text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50">
              Continue with Google
            </button>
            <button className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 font-medium text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50">
              Continue with GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-emerald-700 hover:text-emerald-600"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-xs text-slate-400">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
