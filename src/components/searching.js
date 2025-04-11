import image from "../assets/appartment.png"; 
import image1 from "../assets/villa.png"; 
import image2 from "../assets/studio.png"; 
import image3 from "../assets/office.png"; 
import image4 from "../assets/town.png"; 

export default function AppSearching() {
    return (
      <div className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Try Searching For
          </h2>
          <p className="text-center text-xl text-gray-600 mt-4">
            Thousands of luxury home enthusiasts just like you have found their dream home
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            
            {/* Card Component with Image Instead of Logos */}
            {[
              { name: "Apartment", src: image }, 
              { name: "Villa", src: image1 }, 
              { name: "Studio", src: image2 }, 
              { name: "Office", src: image3 }, 
              { name: "Townhouse", src: image4 },
            ].map((building, index) => (
              <div 
                key={index} 
                className="col-span-2 flex flex-col items-center lg:col-span-1 border border-gray-300 rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-105 hover:border-orange-500 hover:shadow-orange-200">
                <img 
                  src={building.src} 
                  alt={building.name} 
                  className="h-24 w-auto object-contain rounded-lg"
                />
                <p className="mt-2 text-lg font-bold text-gray-600 text-center">{building.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
