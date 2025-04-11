import image from "../assets/image-1.webp"; 
import image1 from "../assets/image-2.webp";
import image2 from "../assets/image-3.webp";
import image3 from "../assets/image-4.webp";
import image4 from "../assets/image-5.webp";
import image5 from "../assets/image-6.webp";
import image6 from "../assets/image-1.webp";
import image7 from "../assets/image-2.webp";

const products = [
    {
      id: 1,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image1,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image2,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image3,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // Additional Products for Second Row
    {
      id: 5,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image4,
      imageAlt: 'Elegant notebook with a hardcover and lined pages.',
    },
    {
      id: 6,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image5,
      imageAlt: 'Classic brown leather wallet with multiple compartments.',
    },
    {
      id: 7,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image6,
      imageAlt: 'Stylish backpack made from durable, water-resistant material.',
    },
    {
      id: 8,
      name: 'Elegant studio flat',
      href: '#',
      price: '$8,600',
      imageSrc: image7,
      imageAlt: 'Modern smartwatch with fitness tracking and notifications.',
    },
];

export default function AppListing() {
    return (
        <div className="bg-white pb-20">
            <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold text-gray-900 text-center">Today’s Luxury Listings</h2>
                <p className="text-center text-xl text-gray-600 mt-4">
                    Thousands of luxury home enthusiasts just like you visit our website.
                </p>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-6">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-xl font-bold text-orange-600">{product.price}</p>
                                <button 
                                    className="mt-3 w-full border border-orange-200 font-bold text-orange-600 py-3 rounded-md hover:bg-orange-700 hover:text-white transition"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
