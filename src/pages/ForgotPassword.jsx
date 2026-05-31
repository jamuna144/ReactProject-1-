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
        <div className="rounded-4xl border border-white/15 bg-white/95 p-8 text-slate-900 shadow-[0_30px_100px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-10">
          <div className="mb-8 rounded-2xl border border-amber-200/70 bg-amber-50 px-4 py-3 text-amber-900">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600">
              Password reset
            </p>
            <p className="mt-1 text-sm font-medium text-amber-950">
              We will send a secure reset link to your inbox.
            </p>
          </div>

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
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {message && (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-800">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 py-3 font-bold text-white shadow-lg shadow-amber-500/30 transition duration-300 hover:brightness-110"
            >
              Send Reset Link
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Remembered your password?{" "}
            <Link
              to="/login"
              className="font-bold text-amber-700 hover:text-amber-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
