import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <div className="mb-5 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-[1.5rem] border border-white/20 bg-slate-950/90 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.25)]"
        >
          <img
            src={logo}
            alt="Library Logo"
            className="h-16 w-16 rounded-full object-cover ring-4 ring-emerald-300/30"
          />
        </Link>
      </div>
      <div className="mb-4 inline-flex items-center rounded-full border border-emerald-200/70 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
        Member portal
      </div>
      <h1 className="mb-3 bg-linear-to-r from-slate-900 via-emerald-700 to-cyan-700 bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto max-w-xs text-sm leading-6 text-slate-600 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;
