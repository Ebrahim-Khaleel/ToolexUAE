import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Ahmed R.",
    company: "Logistics Manager, Dubai",
    text: "Toolex UAE delivered our equipment on time and provided excellent after-sales support. Highly recommended for any warehouse needs!",
    photo: "/public/alberty1.png",
  },
  {
    name: "Sarah M.",
    company: "Procurement Lead, Abu Dhabi",
    text: "The quality of the tools and the professionalism of the team exceeded our expectations. We will definitely order again!",
    photo: "/public/full-shot-man-carrying-pallet-truck.jpg",
  },
  {
    name: "Vikram S.",
    company: "Workshop Supervisor, Sharjah",
    text: "Great prices, genuine products, and fast delivery. Toolex UAE is our go-to supplier for all industrial equipment.",
    photo: "/public/MNX-UK.png",
  },
  {
    name: "Fatima A.",
    company: "Operations Head, Al Ain",
    text: "Exceptional customer service and reliable equipment. Toolex UAE made our procurement process seamless.",
    photo: "/public/Chester-Logo.png",
  },
  {
    name: "Omar K.",
    company: "Plant Manager, Ras Al Khaimah",
    text: "We appreciate the fast delivery and the quality of the products. Toolex UAE is a trusted partner.",
    photo: "/public/Space-Logo-01.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            What Our <span className="text-red-500">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from businesses across the UAE who trust Toolex UAE for their equipment and tool needs.
          </p>
        </div>
        <div className="relative w-full overflow-x-hidden mask-gradient">
          <div className="flex items-stretch animate-testimonials-scroll hover:[animation-play-state:paused] min-w-max">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow min-w-[320px] max-w-xs mx-3 flex-1">
                <CardContent className="p-8 flex flex-col h-full justify-between text-center">
                  <p className="text-blue-950 text-base font-medium text-left mb-2">“{testimonial.text}”</p>
                  <div className="mt-auto flex items-center">
                    <Avatar className="h-8 w-8 mb-2 mt-2">
                      <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-left ml-1">
                      <div className="font-bold text-xs text-blue-950">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes testimonials-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonials-scroll {
            animation: testimonials-scroll 50s linear infinite;
          }
          .mask-gradient {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials; 