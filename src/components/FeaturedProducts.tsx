'use client';

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { client } from "../lib/sanity";
import { useState, useEffect } from "react";
import Link from 'next/link';
import ProductCard from "./ProductCard";
import { Product } from "../types";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const products = await client.fetch(`*[_type == "product" && (name match "*Full electric stand-on stacker*" || name match "*scale pallet truck*" || name match "*Full Electric Walkie Stacker*")]{
          _id,
          name,
          "imageUrl": image.asset->url,
          description,
          category,
          inStock,
          "slug": slug.current
        }`);
        setFeaturedProducts(products);
      } catch (err) {
        setError('Failed to load featured products');
        // Don't log to console in production
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-red-500">Stackers</span>
            <span className="text-blue-950 font-extrabold"> & </span>
            <span className="text-red-500">Pallets</span>
          </h2>
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            Discover our most popular professional equipment trusted by businesses across UAE
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-blue-900 text-lg">Loading featured products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product._id} 
                product={product} 
                variant="featured"
              />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transform hover:scale-105 transition-all">
              View All Equipment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
