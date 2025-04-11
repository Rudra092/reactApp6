import image8 from "../assets/image-8.webp";
import image9 from "../assets/image-9.webp";
import image10 from "../assets/image-10.webp";
import image11 from "../assets/image-11.webp";
import image12 from "../assets/image-12.webp";
import image13 from "../assets/image-13.webp";
import image14 from "../assets/image-14.webp";

const products = [
  {
    id: 1,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image8,
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image9,
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image10,
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image11,
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image12,
    imageAlt: 'Minimalistic brass ruler with engraved measurement markings.',
  },
  {
    id: 6,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image13,
    imageAlt: 'Sleek matte-black precision cutting tool with angled blade.',
  },
  {
    id: 7,
    name: 'Newyork',
    href: '#',
    price: '2491 properties',
    imageSrc: image14,
    imageAlt: 'Hardcover sketchbook with elastic strap and textured pages.',
  },
];

  
  export default function AppExplore() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
          {/* Heading and Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Explore The Neighborhoods
            </h2>
            <p className="mt-4 text-xl text-gray-600">
            Find your dream apartment with our listing
            </p>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {products.map((product, index) => {
              const isLast = index === products.length - 1;
              return (
                <a
                  key={product.id}
                  href={product.href}
                  className={`group block rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-md transition ${
                    isLast ? 'sm:col-span-2' : ''
                  }`}
                >
<div className="overflow-hidden">
  <img
    alt={product.imageAlt}
    src={product.imageSrc}
    className={`w-full object-cover transform transition-transform duration-300 group-hover:scale-105 ${
      isLast ? 'h-96 sm:h-[28rem]' : 'h-64'
    }`}
  />
</div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    <p className="mt-2 text-base text-gray-600">{product.price}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  