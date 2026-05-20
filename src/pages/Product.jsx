import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CutRectangle from "../components/CutRectangle";
import CategorySearchBar from "../components/CategorySearchBar";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { toSlug } from "./ProductDetail";

function Product() {
  const [searchText, setSearchText] = useState("");
  const { products, loading: productsLoading } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();

  const loading = productsLoading || categoriesLoading;

  const searchResults = searchText.trim()
    ? products.filter((p) =>
        p.label.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  const isSearching = searchText.trim().length > 0;

  return (
    <>
      <Helmet>
        <title>Products | Jay Maa Shitala Traders Nepal</title>
        <meta
          name="description"
          content="Browse all GI fittings, nipples, flanges, valves and hardware products by category. Jay Maa Shitala Traders — leading supplier in Nepal."
        />
        <link rel="canonical" href="https://www.jmstraders.com.np/product" />
      </Helmet>

      <Navbar />
      <CategorySearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        categories={categories}
      />

      <div className="relative min-h-screen">
        {/* Background circle decoration */}
        <svg
          className="absolute top-0 right-0 w-[70%] h-[90%] md:w-[60%] -z-10 pointer-events-none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="1" />
            </linearGradient>
          </defs>
          <circle cx={400} cy={0} r={400} fill="url(#fadeGradient)" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 py-6">
          {loading ? (
            <div className="flex items-center justify-center h-64 text-gray-400">
              Loading products...
            </div>
          ) : isSearching ? (
            /* Search results view */
            <section>
              <h2 className="text-lg font-semibold text-gray-600 mb-4">
                Results for &quot;{searchText}&quot; ({searchResults.length} found)
              </h2>
              {searchResults.length === 0 ? (
                <p className="text-gray-400">No products found.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  {searchResults.map((item) => (
                    <Link key={item.id} to={`/product/${toSlug(item.label)}`}>
                      <CutRectangle
                        src={item.image_url}
                        name={item.label}
                        brand={item.brand}
                        size={item.size_info}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ) : (
            /* Category sections view */
            <div className="space-y-10">
              {categories.map((category) => {
                const categoryProducts = products
                  .filter((p) => String(p.category_name) === String(category.id))
                  .slice(0, 4);

                if (categoryProducts.length === 0) return null;

                return (
                  <section
                    key={category.id}
                    className="bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8] rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-700 border-b border-gray-300 pb-1">
                        {category.name}
                      </h2>
                      <Link
                        to={`/product/category/${toSlug(category.name)}`}
                        className="text-xs sm:text-sm text-red-500 hover:text-red-600 font-medium whitespace-nowrap ml-3"
                      >
                        View All →
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                      {categoryProducts.map((item) => (
                        <Link key={item.id} to={`/product/${toSlug(item.label)}`}>
                          <CutRectangle
                            src={item.image_url}
                            name={item.label}
                            brand={item.brand}
                            size={item.size_info}
                          />
                        </Link>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
