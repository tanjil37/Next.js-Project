import ProductCard from "@/components/ProductCard";
import axios from "axios";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-2">Courses</h1>
      <p className="text-muted mb-6">Browse available courses.</p>

      {/* Search & filter UI (UI-only: not functional) */}
      <div className="flex gap-3 mb-6">
        <input className="input flex-1" placeholder="Search courses..." />
        <select className="select">
          <option>All categories</option>
          <option>Development</option>
          <option>Data Science</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
