export default function AppWork() {
    const logos = [
      {
        alt: 'Transistor',
        src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
        href: 'https://transistor.fm/',
      },
      {
        alt: 'Reform',
        src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
        href: 'https://reform.app/',
      },
      {
        alt: 'Tuple',
        src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
        href: 'https://tuple.app/',
      },
      {
        alt: 'SavvyCal',
        src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
        href: 'https://savvycal.com/',
      },
      {
        alt: 'Statamic',
        src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
        href: 'https://statamic.com/',
      },
    ];
  
    return (
      <div className="bg-white py-10 sm:py-18 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let’s Work Together
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-600">
            Thousands of luxury home enthusiasts just like you visit our website.
          </p>
  
          {/* Logos Marquee with Pause on Hover */}
          <div className="mt-10 overflow-hidden relative group">
            <div className="flex w-max gap-x-16 animate-marquee group-hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <a
                  key={index}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-20 object-contain flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  