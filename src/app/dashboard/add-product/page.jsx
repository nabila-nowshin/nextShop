"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Client-side redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null; // Wait until redirect

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price }),
    });

    if (res.ok) {
      alert("✅ Product added!");
      setName("");
      setDescription("");
      setPrice("");
    } else {
      const { error } = await res.json();
      alert("❌ Error: " + error);
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            step="0.01"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
