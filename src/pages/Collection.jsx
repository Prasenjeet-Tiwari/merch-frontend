// src/pages/Collection.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Collection() {
  const { productId } = useParams(); // /collection/:productId
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // frontend-only options
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["#000000", "#5B21B6", "#FFFFFF"];

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);

  // 🔹 Fetch product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/product/${productId}`);
        const data = await res.json();

        // If backend sends an error instead of product
        if (data.error) {
          setProduct(null);
        } else {
          setProduct(data);

          // set first image as default (if available)
          if (data.orderImages?.length > 0) {
            setMainImage(data.orderImages[0]);
          }
        }
      } catch (err) {
        console.error("❌ Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // 🔹 Handle Buy Now (checkout flow)
  const handleBuyNow = async () => {
    try {
      const items = [
        {
          productId,
          name: product?.name,
          price: product?.price,
          quantity,
          size: selectedSize,
          color: selectedColor,
        },
      ];

      const res = await fetch("http://localhost:5000/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // ✅ redirect to checkout
      } else {
        alert("❌ No checkout URL returned from backend");
      }
    } catch (err) {
      console.error("❌ Error placing order:", err);
    }
  };

  // 🔹 UI states
  if (loading) return <p className="text-white text-center mt-20">Loading product...</p>;
  if (!product) return <p className="text-white text-center mt-20">❌ Product not found</p>;

  // helper for safe image URLs
  const getImageUrl = (img) =>
    img?.startsWith("http") ? img : `http://localhost:5000/uploads/${img}`;

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-white">
      {/* ======= TOP PRODUCT AREA ======= */}
      <section style={{ paddingTop: 150 }}>
        <div className="grid lg:grid-cols-2 gap-10" style={{ minHeight: "calc(100vh - 150px)" }}>
          {/* LEFT: Product Images */}
          <div className="flex flex-col items-center lg:sticky top-[150px]">
            {/* Main image or placeholder */}
            {mainImage ? (
              <img
                src={getImageUrl(mainImage)}
                alt={product.name}
                className="w-full max-w-[420px] h-auto mb-4 rounded-lg"
              />
            ) : (
              <img
                src="https://via.placeholder.com/420x420?text=No+Image"
                alt="No product image"
                className="w-full max-w-[420px] h-auto mb-4 rounded-lg"
              />
            )}

            {/* Thumbnails */}
            {product.orderImages?.length > 1 && (
              <div className="flex gap-3 mt-2">
                {product.orderImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`border rounded-md overflow-hidden ${
                      mainImage === img ? "border-white" : "border-transparent"
                    }`}
                  >
                    <img
                      src={getImageUrl(img)}
                      alt={`preview-${idx}`}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Price */}
            <p className="mt-4 text-2xl font-bold">₹{product.price}</p>
          </div>

          {/* RIGHT: Product Info */}
          <div className="h-full overflow-y-auto pr-2">
            {/* Title */}
            <h1 className="text-[36px] font-extrabold mb-2">{product.name}</h1>

            {/* ✅ Description (with fallback) */}
            <p className="text-[20px] leading-[28px] mb-8">
              {product.description || "No description available"}
            </p>

            {/* Size + Quantity */}
            <div className="mt-6 flex flex-wrap items-start gap-8">
              {/* Size */}
              <div>
                <h3 className="text-[16px] mb-2">Choose Size:</h3>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-10 rounded-md border text-sm transition ${
                        selectedSize === size
                          ? "bg-white text-black border-white"
                          : "border-gray-600 text-white hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-[16px] mb-2">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <button
                    className="w-10 h-10 bg-gray-800 rounded"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    −
                  </button>
                  <span className="min-w-[2ch] text-center text-lg">{quantity}</span>
                  <button
                    className="w-10 h-10 bg-gray-800 rounded"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-6">
              <h3 className="text-[16px] mb-2">Choose Color:</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-white"
                        : "border-gray-500 hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-lg"
                onClick={() =>
                  console.log("Add to cart:", {
                    productId,
                    name: product.name,
                    price: product.price,
                    selectedSize,
                    selectedColor,
                    quantity,
                  })
                }
              >
                Add to cart
              </button>
              <button
                className="w-full bg-white hover:bg-gray-100 text-black rounded-md py-3 text-lg"
                onClick={handleBuyNow}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
