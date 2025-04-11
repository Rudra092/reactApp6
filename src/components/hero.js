import React from "react";
import image from "../assets/image.png"; 

export default function AppHero() {
  return (
    <div
      className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center text-center text-white px-6 gap-4">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Search Luxury Homes
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Thousands of luxury home enthusiasts just like you visit our website.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-lg">
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search for a location..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="px-6 py-3 bg-orange-600 text-white font-semibold hover:bg-orange-500">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
