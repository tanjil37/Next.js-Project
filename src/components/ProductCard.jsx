import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-4 bg-white">
      <div className="h-40 bg-gray-100 mb-3 flex items-center justify-center">
        {product.image ? <img src={product.image} alt={product.title} className="object-cover h-full w-full"/> : <div className="text-gray-400">No image</div>}
        
      </div>
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{product.short}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">${product.price}</span>
        <Link href={`/products/${product.id}`} className="btn btn-sm">Details</Link>
      </div>
    </div>
  );
}
