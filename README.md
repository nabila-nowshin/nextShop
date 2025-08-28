# ProductPulse

**ProductPulse** is a simple Next.js application for managing products. Users can view products, and authenticated users can add new products. The app uses NextAuth for authentication and temporary in-memory storage for products.

---

## **Setup & Installation**

### 1. Clone the Repository

```bash
git clone https://github.com/nabila-nowshin/nextShop
cd nextshop
```

### 2. Install Dependencies

```
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXTAUTH_SECRET=<your-random-secret>
```

Replace your-random-secret with a secure random string.
You can generate one using:

```
openssl rand -base64 32
```

### 4. Run the Project Locally

```
npm run dev
# or
yarn dev
```

## 📌 Route Summary

- `/` → Home page showing all products
- `/add-product` → Add a new product (protected, requires login)
- `/api/products` → API route for product list (in-memory storage)
- `/api/auth/[...nextauth]` → NextAuth authentication routes
