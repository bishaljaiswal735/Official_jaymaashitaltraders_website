import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaBars } from "react-icons/fa";
import { useProducts } from "../hooks/useProducts";
import { toSlug } from "../pages/ProductDetail";

function CategorySearchBar({ searchText, onSearchChange, categories }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const { products } = useProducts();

  const activeCategorySlug = location.pathname.startsWith("/product/category/")
    ? location.pathname.replace("/product/category/", "")
    : null;

  const hoveredCategory = categories.find((c) => c.id === hoveredCategoryId);
  const hoveredProducts = hoveredCategoryId
    ? products
        .filter((p) => String(p.category_name) === String(hoveredCategoryId))
        .slice(0, 8)
    : [];

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setHoveredCategoryId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setHoveredCategoryId(null);
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-40 w-full bg-[#e0e8f3] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">

        {/* Categories button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setDropdownOpen((prev) => !prev);
              setHoveredCategoryId(null);
            }}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 sm:px-4 rounded-md font-medium text-sm transition whitespace-nowrap"
          >
            <FaBars className="w-4 h-4" />
            <span className="hidden sm:inline">Categories</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-xl border border-gray-100 z-50 flex overflow-hidden">

              {/* Left panel — category list */}
              <div className="w-32 sm:w-44 md:w-52 border-r border-gray-100 py-1 overflow-y-auto max-h-[60vh]">
                <Link
                  to="/product"
                  onMouseEnter={() => setHoveredCategoryId(null)}
                  className={`flex items-center px-2.5 sm:px-4 py-2 text-[11px] sm:text-sm transition hover:bg-gray-50 ${
                    !activeCategorySlug ? "text-red-500 font-semibold" : "text-gray-700"
                  }`}
                >
                  All Products
                </Link>
                <div className="border-t border-gray-100 my-1" />
                {categories.length === 0 ? (
                  <p className="px-3 py-2 text-[11px] text-gray-400">No categories</p>
                ) : (
                  categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/product/category/${toSlug(cat.name)}`}
                      onMouseEnter={() => setHoveredCategoryId(cat.id)}
                      className={`flex items-center justify-between px-2.5 sm:px-4 py-2 text-[11px] sm:text-sm transition ${
                        hoveredCategoryId === cat.id
                          ? "bg-red-50 text-red-500 font-semibold"
                          : activeCategorySlug === cat.slug
                          ? "text-red-500 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="text-gray-400 text-[10px] ml-1 flex-shrink-0">›</span>
                    </Link>
                  ))
                )}
              </div>

              {/* Right panel — always visible when a category is hovered/tapped */}
              {hoveredCategoryId && (
                <div className="w-36 sm:w-48 md:w-56 flex flex-col py-2">
                  <p className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 sm:px-3 pb-1.5 border-b border-gray-100 truncate">
                    {hoveredCategory?.name}
                  </p>
                  <div className="overflow-y-auto max-h-[55vh] flex-1">
                    {hoveredProducts.length === 0 ? (
                      <p className="px-2 py-2 text-[10px] text-gray-400">No products yet</p>
                    ) : (
                      hoveredProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${toSlug(p.label)}`}
                          className="flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-red-50 transition group/item"
                        >
                          <img
                            src={p.image_url}
                            alt={p.label}
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain rounded bg-gray-50 flex-shrink-0"
                          />
                          <span className="text-[10px] sm:text-xs md:text-sm text-gray-700 group-hover/item:text-red-500 truncate transition">
                            {p.label}
                          </span>
                        </Link>
                      ))
                    )}
                  </div>
                  <div className="border-t border-gray-100 mt-1 pt-1.5 px-2 sm:px-3">
                    <Link
                      to={`/product/category/${toSlug(hoveredCategory?.name ?? "")}`}
                      className="text-[9px] sm:text-xs font-medium text-red-500 hover:text-red-600 transition"
                    >
                      View all →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search input */}
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-4 py-2 w-full border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

      </div>
    </div>
  );
}

export default CategorySearchBar;
