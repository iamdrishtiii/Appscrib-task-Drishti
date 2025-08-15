import Head from "next/head";
import React, { useState, useMemo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Home = ({ products }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");

  const [openSections, setOpenSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // ✅ Sort products whenever sortOption changes
  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    if (sortOption === "lowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    // "recommended" = original order, so no sorting

    return sorted;
  }, [products, sortOption]);

  return (
    <>
      <Head>
        <title>Shop Now</title>
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{products.length} ITEMS</span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-blue-600 text-sm font-medium"
            >
              {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>

          {/* Sorting Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="recommended">Recommended</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        <div className="flex gap-6">
          {/* Filters */}
          {showFilters && (
            <div className="w-24 sm:w-40 border-r pr-4">
              {[
                { key: "idealFor", label: "Ideal For", items: ["Men", "Women", "Baby & Kids"] },
                { key: "occasion", label: "Occasion", items: ["Party", "Function", "Wedding"] },
                { key: "work", label: "Work", items: ["Casual", "Formal", "Outdoor"] },
                { key: "fabric", label: "Fabric", items: ["Cotton", "Silk", "Polyester"] },
                { key: "segment", label: "Segment", items: ["Luxury", "Budget", "Mid-Range"] },
                { key: "suitableFor", label: "Suitable For", items: ["Summer", "Winter", "All Seasons"] },
              ].map((section) => (
                <div key={section.key} className="mt-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(section.key)}
                  >
                    <h3 className="text-xs font-bold uppercase">{section.label}</h3>
                    {openSections[section.key] ? (
                      <IoIosArrowUp className="text-gray-600" />
                    ) : (
                      <IoIosArrowDown className="text-gray-600" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500">All</p>

                  {openSections[section.key] && (
                    <>
                      <button className="text-xs text-blue-600 underline mt-1">
                        Unselect all
                      </button>
                      <div className="mt-2 flex flex-col gap-1">
                        {section.items.map((item) => (
                          <label
                            key={item}
                            className="flex items-center gap-2 text-sm"
                          >
                            <input type="checkbox" className="accent-black" />
                            {item}
                          </label>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 flex flex-col hover:shadow-lg transition duration-300"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-40 object-contain mb-4"
                  />
                  <h2 className="text-sm font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-600 text-sm">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


// Server Side Data Fetch
export async function getServerSideProps() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return {
    props: {
      products: data.products,
    },
  };
}
