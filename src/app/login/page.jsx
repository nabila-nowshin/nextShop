"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-950 px-4">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-700 hover:border-blue-400 transition">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h1>

        {/* <div className="text-gray-400 text-center my-4">OR</div> */}

        {/* Credentials Login */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const username = e.target.username.value;
            const password = e.target.password.value;
            signIn("credentials", {
              redirect: true,
              username,
              password,
              callbackUrl: "/products",
            });
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="username"
            placeholder="UserName"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
