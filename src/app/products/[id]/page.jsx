"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id); // URL param /products/[id]
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch("/api/products");
      const data = await res.json();
      const found = data.find((p) => p.id === productId);
      setProduct(found);
    }
    fetchProduct();
  }, [productId]);

  if (!product)
    return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 rounded-xl text-white">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="font-bold text-blue-400 mb-4">${product.price}</p>
    </div>
  );
}
