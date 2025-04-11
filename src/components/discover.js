import imageHome1 from "../assets/image-1.webp"; 
import imageHome2 from "../assets/image-2.webp";
import imageHome3 from "../assets/image-3.webp";

import imageAbout1 from "../assets/image-4.webp";
import imageAbout2 from "../assets/image-5.webp";
import imageAbout3 from "../assets/image-6.webp";

import imageServices1 from "../assets/image-6.webp";
import imageServices2 from "../assets/image-1.webp";
import imageServices3 from "../assets/image-2.webp";

import { useState } from "react";

export default function AppDiscover() {
  const [activeTab, setActiveTab] = useState("Buying");

  const tabs = [
    {
      name: "Buying",
      content: [
        { title: "Find how much you can afford", description: "We’ll help you estimate your budget range. Save to your buyer profile to help in your search", image: imageHome1 },
        { title: "Understand your monthly costs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum.", image: imageHome2 },
        { title: "Get help with your down payment", description: "In fermentum dignissim mauris et blandit.", image: imageHome3 },
      ],
    },
    {
      name: "Rating",
      content: [
        { title: "Find how much you can afford", description: "We’ll help you estimate your budget range. Save to your buyer profile to help in your search", image: imageAbout1 },
        { title: "Understand your monthly costs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum.", image: imageAbout2 },
        { title: "Get help with your down payment", description: "In fermentum dignissim mauris et blandit.", image: imageAbout3 },
      ],
    },
    {
      name: "Selling",
      content: [
        { title: "Find how much you can afford", description: "We’ll help you estimate your budget range. Save to your buyer profile to help in your search", image: imageServices1 },
        { title: "Understand your monthly costs", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin ipsum.", image: imageServices2 },
        { title: "Get help with your down payment", description: "In fermentum dignissim mauris et blandit.", image: imageServices3 },
      ],
    }
  ];

  return (
    <div className="w-full bg-orange-50 shadow-md">
      <div className="max-w-7xl mx-auto pt-14 pb-14 px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Discover how we can help</h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Thousands of luxury home enthusiasts just like you visit our website.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-3 px-5 sm:px-8 text-base sm:text-lg font-semibold focus:outline-none transition duration-300 
                ${
                  activeTab === tab.name
                    ? "border-b-4 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-orange-500"
                }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabs.find((tab) => tab.name === activeTab)?.content.map((item, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:shadow-lg hover:scale-105">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-base sm:text-lg">{item.description}</p>
                <button 
                  className="mt-4 bg-orange-500 text-white py-2 px-5 rounded-md text-sm sm:text-base font-semibold hover:bg-orange-600 transition duration-300"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
