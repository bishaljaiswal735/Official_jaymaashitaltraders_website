import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import CutRectangle from "../components/CutRectangle";
import CategorySearchBar from "../components/CategorySearchBar";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";
import { toSlug } from "./ProductDetail";
import useWindowWidth from "../components/useWindowWidth";

function CategoryProducts() {
  const { categorySlug } = useParams();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { categories, loading: categoriesLoading } = useCategories();
  const windowWidth = useWindowWidth();

  const itemsPerPage = windowWidth < 768 ? 6 : 12;

  const category = categories.find(
    (c) => c.slug === categorySlug || toSlug(c.name) === categorySlug
  );

  const { products, loading: productsLoading } = useProducts(
    categoriesLoading ? undefined : (category ? category.id : null)
  );

  const loading = categoriesLoading || productsLoading;
  const categoryNotFound = !categoriesLoading && !category;

  const displayedProducts = searchText.trim()
    ? products.filter((p) =>
        p.label.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

  const paginatedProducts = displayedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug, searchText]);

  // Build page number list with ellipsis
  function getPageNumbers() {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages = [];
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  }

  return (
    <>
      <Helmet>
        <title>
          {category ? `${category.name} Nepal` : "Products"} | Jay Maa Shitala Traders
        </title>
        <meta
          name="description"
          content={
            category
              ? `Buy ${category.name} in Nepal from Jay Maa Shitala Traders. Best price GI fittings and hardware supplier in Nepal.`
              : "Browse products from Jay Maa Shitala Traders Nepal."
          }
        />
        {category && (
          <link
            rel="canonical"
            href={`https://www.jmstraders.com.np/product/category/${categorySlug}`}
          />
        )}
      </Helmet>

      <Navbar />
      <CategorySearchBar
        searchText={searchText}
        onSearchChange={setSearchText}
        categories={categories}
      />

      <div className="relative min-h-screen">
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
          ) : categoryNotFound ? (
            <div className="flex flex-col items-center justify-center h-64 gap-3 text-gray-400">
              <p>Category not found: <span className="font-mono text-red-400">"{categorySlug}"</span></p>
              <p className="text-sm">Check that this slug exists in your Supabase categories table.</p>
              <Link to="/product" className="text-red-500 text-sm hover:underline">← Back to all products</Link>
            </div>
          ) : (
            <section className="bg-gradient-to-b from-[#FFFFFF] to-[#dae3e8] rounded-xl p-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-700 border-b border-gray-300 pb-1">
                  {category.name}
                </h1>
                <Link to="/product" className="text-sm text-gray-500 hover:text-gray-700">
                  ← All Categories
                </Link>
              </div>

              {/* Products grid */}
              {displayedProducts.length === 0 ? (
                <p className="text-gray-400 py-10 text-center">
                  {searchText ? `No products found for "${searchText}"` : "No products in this category yet."}
                </p>
              ) : (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                    {paginatedProducts.map((item) => (
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

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-8 flex-wrap">
                      {/* Prev */}
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      >
                        ← Prev
                      </button>

                      {/* Page numbers */}
                      {getPageNumbers().map((page, idx) =>
                        page === "..." ? (
                          <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 text-sm">…</span>
                        ) : (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-md text-sm font-medium transition ${
                              currentPage === page
                                ? "bg-red-500 text-white border border-red-500"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}

                      {/* Next */}
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1.5 rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                      >
                        Next →
                      </button>
                    </div>
                  )}

                  {/* Page info */}
                  {totalPages > 1 && (
                    <p className="text-center text-xs text-gray-400 mt-2">
                      Page {currentPage} of {totalPages} · {displayedProducts.length} products
                    </p>
                  )}
                </>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;
