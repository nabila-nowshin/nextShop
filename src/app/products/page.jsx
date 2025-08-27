"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 bg-gray-950">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="p-6 bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition group border border-gray-700 hover:border-blue-400"
          >
            <h2 className="text-xl font-semibold text-white">{p.name}</h2>
            <p className="text-gray-300 mt-2">{p.description}</p>
            <p className="font-bold text-blue-400 mt-2">${p.price}</p>
            <Link
              href={`/products/${p.id}`}
              className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
