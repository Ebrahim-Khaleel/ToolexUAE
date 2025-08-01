import Image from 'next/image';

const partners = [
  {
    name: "Prestoo",
    logo: "/prestoo.png",
  },
  {
    name: "MNX UK",
    logo: "/MNX-UK.png",
  },
  {
    name: "Stahlwille",
    logo: "/Stahlwille.png",
  },
  {
    name: "Cam Equipment",
    logo: "/Cam-Equipment.jpg",
  },
  {
    name: "Lemas",
    logo: "/Lemas-logo-01.png",
  },
  {
    name: "Cyalume",
    logo: "/cyalume.webp",
  },
  {
    name: "Crown",
    logo: "/crown.png",
  },
  {
    name: "Clarke",
    logo: "/Clarke-logo-01.png",
  },
  {
    name: "Chester",
    logo: "/Chester-Logo.png",
  },
  {
    name: "YATO",
    logo: "/YATO.png",
  },
  {
    name: "Shuter",
    logo: "/Shuter-logo-01.png",
  },
  {
    name: "Alberty",
    logo: "/alberty1.png",
  },
  {
    name: "Space",
    logo: "/Space-Logo-01.png",
  },
  {
    name: "Sait",
    logo: "/sait.jpg",
  },
  {
    name: "Holfman",
    logo: "/Holfman-01.png",
  },
  {
    name: "Rutlands",
    logo: "/rutlands.png",
  },
  {
    name: "RR Robland",
    logo: "/RR-Robland-01.png",
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Brand <span className="text-red-500">Partners</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">We partner with the world&apos;s leading equipment manufacturers to bring you genuine, high-quality tools and machinery.</p>
        </div>

        {/* Infinite scrolling partners */}
        <div className="relative w-full overflow-x-hidden mask-gradient">
          <div className="flex items-center animate-partners-scroll hover:[animation-play-state:paused] min-w-max">
            {partners.concat(partners).map((partner, index) => (
              <Image
                key={`${partner.name}-${index}`}
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={64}
                className="h-10 sm:h-16 mx-4 sm:mx-8 w-auto object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes partners-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-partners-scroll {
            animation: partners-scroll 30s linear infinite;
          }
          .mask-gradient {
            -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
            mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          }
        `}
      </style>
    </section>
  );
};

export default Partners;
