import React from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

export default function NotFound() {
  return (
    <main
      class="h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center bg-[#ffffff]"
      style={{ backgroundImage: `url(${notfound})` }}
    >
      <div className="h-screen w-full flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 class="text-9xl font-extrabold text-black tracking-widest">404</h1>
        <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button class="mt-5">
          <div class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-[#ffffff] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </div>
        </button>
      </div>
    </main>
  );
}
