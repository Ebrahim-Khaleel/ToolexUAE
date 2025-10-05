import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import Link from 'next/link';
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Abdul Kareem",
    company: "Procurement Lead, SAT Enterprise",
    text: "Our warehouse saved 10% in handling costs after switching to ToolexUAE's electric stackers, affordable, durable, and backed by prompt, reliable service every time.",
    photo: "/public/alberty1.png",
  },
  {
    name: "Unai Sharook",
    company: "Procurement Lead, Bay Marine",
    text: "ToolexUAE's pallet trucks delivered immediate efficiency gains. affordable pricing, robust build, and responsive after-sales gave our operations confidence and zero downtime.",
    photo: "/public/full-shot-man-carrying-pallet-truck.jpg",
  },
  {
    name: "Shakir Moosan",
    company: "Owner, Capsule Auto Garage",
    text: "Choosing ToolexUAE for electric stackers was a smart investment. exceptional value, quick delivery, and dependable support that keeps our fleet productive daily.",
    photo: "/public/MNX-UK.png",
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
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            Real feedback from businesses across the UAE who trust Toolex.
          </p>
        </div>
        <div className="relative w-full overflow-x-hidden mask-gradient">
          <div className="flex items-stretch animate-testimonials-scroll hover:[animation-play-state:paused] min-w-max">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow min-w-[320px] max-w-xs mx-3 flex-1">
                <CardContent className="p-8 flex flex-col h-full justify-between text-center">
                  <p className="text-blue-950 text-base font-semibold text-left mb-4">“{testimonial.text}”</p>
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
            animation: testimonials-scroll 40s linear infinite;
          }
          .mask-gradient {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
      </div>
      <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="bg-red-500 text-white hover:bg-red-700 transform hover:scale-105 transition-all">
              Start Your Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
    </section>
  );
};

export default Testimonials; 