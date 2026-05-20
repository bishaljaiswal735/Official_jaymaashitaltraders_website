import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp, FaPhone, FaCheckCircle } from "react-icons/fa";
import { useProducts } from "../hooks/useProducts";
import Navbar from "../components/Navbar";
import CutRectangle from "../components/CutRectangle";

export const toSlug = (label) =>
  label.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

function ProductDetail() {
  const { slug } = useParams();
  const { products, loading } = useProducts();

  const product = products.find((p) => toSlug(p.label) === slug);

  const relatedProducts = product
    ? products
        .filter(
          (p) =>
            p.category_name === product.category_name && p.id !== product.id
        )
        .slice(0, 4)
    : [];

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Product not found.{" "}
        <Link to="/product" className="text-red-500 ml-2 hover:underline">
          Go back
        </Link>
      </div>
    );
  }

  const description =
    product.description ||
    `${product.label} is a high-quality product supplied by Jay Maa Shitala Traders Pvt. Ltd. in Kathmandu, Nepal. ` +
    `Available from trusted brands including ${product.brand}, this product comes in a wide range of sizes: ${product.size_info}. ` +
    `As one of Nepal's leading GI fittings and hardware suppliers, we provide genuine products at competitive prices. ` +
    `Contact us via WhatsApp or phone for bulk orders, current pricing, and fast delivery across Nepal.`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.label,
    image: product.image_url,
    description: description,
    brand: { "@type": "Brand", name: product.brand },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "NPR",
      seller: {
        "@type": "Organization",
        name: "Jay Maa Shitala Traders Pvt. Ltd.",
        url: "https://www.jmstraders.com.np",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jmstraders.com.np/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.jmstraders.com.np/product" },
      { "@type": "ListItem", position: 3, name: product.label, item: `https://www.jmstraders.com.np/product/${slug}` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          {product.label} Nepal | Buy {product.label} | Jay Maa Shitala Traders
        </title>
        <meta
          name="description"
          content={`Buy ${product.label} in Nepal from Jay Maa Shitala Traders. Brand: ${product.brand}. Sizes: ${product.size_info}. Best price GI fittings and hardware supplier in Kathmandu, Nepal. Call or WhatsApp for price.`}
        />
        <meta
          name="keywords"
          content={`${product.label} Nepal, ${product.label} price Nepal, buy ${product.label} Nepal, ${product.label} supplier Kathmandu, ${product.brand} ${product.label}, GI fittings Nepal`}
        />
        <link
          rel="canonical"
          href={`https://www.jmstraders.com.np/product/${slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-white to-[#dae3e8]">
        <div className="max-w-5xl mx-auto px-4 py-6">

          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-gray-400 mb-4 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <span>›</span>
            <Link to="/product" className="hover:text-red-500 transition">Products</Link>
            <span>›</span>
            <span className="text-gray-600 font-medium truncate max-w-[200px]">{product.label}</span>
          </nav>

          {/* Main card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">

              {/* Image panel */}
              <div className="md:w-[42%] bg-gray-50 flex items-center justify-center p-6 md:p-10 min-h-[240px]">
                <img
                  src={product.image_url}
                  alt={product.label}
                  className="max-h-64 md:max-h-80 w-full object-contain drop-shadow-sm"
                />
              </div>

              {/* Details panel */}
              <div className="flex-1 p-5 md:p-8 flex flex-col gap-4">

                {/* Badge + title */}
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-50 text-green-600 px-2.5 py-1 rounded-full mb-3">
                    <FaCheckCircle className="w-3 h-3" /> In Stock
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                    {product.label}
                  </h1>
                </div>

                {/* Specs table */}
                <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden text-sm">
                  <div className="flex">
                    <span className="w-32 shrink-0 bg-gray-50 px-4 py-2.5 text-gray-500 font-medium">Brand</span>
                    <span className="px-4 py-2.5 text-gray-800">{product.brand}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 shrink-0 bg-gray-50 px-4 py-2.5 text-gray-500 font-medium">Sizes</span>
                    <span className="px-4 py-2.5 text-gray-800">{product.size_info}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 shrink-0 bg-gray-50 px-4 py-2.5 text-gray-500 font-medium">Availability</span>
                    <span className="px-4 py-2.5 text-green-600 font-medium">In Stock · Nepal</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <a
                    href={`https://wa.me/9779818607337?text=Hi, I'm interested in ${encodeURIComponent(product.label)}. Please share the latest price.`}
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp for Price
                  </a>
                  <a
                    href="tel:+9779818607337"
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition shadow-sm"
                  >
                    <FaPhone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-10">
              <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                Related Products
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                {relatedProducts.map((item) => (
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
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default ProductDetail;
