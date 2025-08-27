"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product)
    return <p className="text-center mt-10 text-gray-200">Loading...</p>;
  if (product.error)
    return <p className="text-center mt-10 text-red-500">{product.error}</p>;

  return (
    <div className="flex justify-center py-16 px-4 bg-gray-950 min-h-[80vh]">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-10 max-w-xl w-full border border-gray-700 hover:border-blue-400 transition">
        <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
        <p className="text-gray-300 mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-blue-400 mb-6">
          ${product.price}
        </p>
        <Link
          href="/products"
          className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
