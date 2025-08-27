// src/app/not-found.jsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center  px-4  mt-20">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 rounded-2xl shadow-xl p-10 text-center max-w-md w-full border">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-200 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
