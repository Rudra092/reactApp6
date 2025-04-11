import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae.”",
    name: "Judith Black",
    title: "CEO of Workcation",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote:
      "“Amazing experience! The luxury listings are top-notch. I found my dream apartment thanks to this platform.”",
    name: "Michael Lee",
    title: "Investor",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    quote:
      "“Everything from the search experience to the support team was incredible. Highly recommend it!”",
    name: "Sophia Gomez",
    title: "Real Estate Agent",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function AppTestimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]);

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.3 3.995a1 1 0 00.95.69h4.213c.969 0 1.371 1.24.588 1.81l-3.41 2.48a1 1 0 00-.364 1.118l1.3 3.995c.3.921-.755 1.688-1.538 1.118l-3.41-2.48a1 1 0 00-1.176 0l-3.41 2.48c-.783.57-1.838-.197-1.539-1.118l1.3-3.995a1 1 0 00-.364-1.118L2.097 9.422c-.783-.57-.38-1.81.588-1.81h4.213a1 1 0 00.95-.69l1.3-3.995z" />
      </svg>
    ));

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-16 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            {/* Heading and Subheading */}
    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
    Clients Testimonials
    </h2>
    <p className="mt-4 text-xl text-gray-600">
    Thousands of luxury home enthusiasts just like you visit our website.
    </p>

        {/* Slider */}
        <div className="relative mt-10">
          <figure>
            <blockquote className="text-xl font-semibold text-gray-900 sm:text-2xl">
              <p>{testimonials[current].quote}</p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto size-14 rounded-full"
                src={testimonials[current].image}
                alt={testimonials[current].name}
              />
              <div className="mt-4 flex justify-center items-center gap-3 text-base">
                <div className="font-semibold text-gray-900">{testimonials[current].name}</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">{testimonials[current].title}</div>
              </div>
              <div className="mt-2 flex justify-center">{renderStars(testimonials[current].rating)}</div>
            </figcaption>
          </figure>

          {/* Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="text-indigo-600 hover:text-indigo-800 px-4 py-2 text-3xl font-bold"
              aria-label="Previous"
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="text-indigo-600 hover:text-indigo-800 px-4 py-2 text-3xl font-bold"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
