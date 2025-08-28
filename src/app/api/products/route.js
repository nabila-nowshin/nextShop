import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Laptop", description: "Fast and lightweight", price: 1200 },
  { id: 2, name: "Phone", description: "Latest model smartphone", price: 800 },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling, wireless",
    price: 200,
  },
  {
    id: 4,
    name: "Smartwatch",
    description: "Tracks fitness and notifications",
    price: 250,
  },
  { id: 5, name: "Tablet", description: "Portable and powerful", price: 600 },
  { id: 6, name: "Camera", description: "High-resolution DSLR", price: 1500 },
  {
    id: 7,
    name: "Gaming Console",
    description: "Next-gen performance",
    price: 500,
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    description: "Loud and portable",
    price: 120,
  },
  { id: 9, name: "Monitor", description: "4K Ultra HD display", price: 400 },
  {
    id: 10,
    name: "Keyboard",
    description: "Mechanical RGB backlit",
    price: 90,
  },
];

// GET /api/products
export async function GET() {
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price } = body;

    if (!name || !description || !price) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newProduct = {
      id: products.length + 1,
      name,
      description,
      price: parseFloat(price),
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
