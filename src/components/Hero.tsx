'use client';

import { Button } from "./ui/button";
import { ArrowRight, Truck, Shield, ShieldCheckIcon, Clock, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Trust Badge */}
            <div className="flex items-center w-full max-w-sm sm:w-96 space-x-2 text-white bg-red-400/10 backdrop-blur px-3 sm:px-4 py-2 rounded-full border border-red-300 mx-auto md:mx-auto lg:mx-0">
              <ShieldCheckIcon className="h-5 w-5 text-red-400" />
              <span className="text-xs sm:text-sm text-white font-medium text-center md:text-center lg:text-left">
                Trusted by 100+ UAE Warehouses & Workshops
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-center md:text-center lg:text-left">
              Get Reliable
              <span className="text-red-400 font-bold"> Equipment</span>
              <br />
              for Your Warehouse
            </h1>

            {/* Value Proposition */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed text-center md:text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                Electric Forklifts, Pallet Trucks, and Garage tools delivered across the UAE with warranty and expert support.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Zap className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                <span className="text-md sm:text-md text-center lg:text-left text-blue-100">Get quote instantly via WhatsApp</span>
              </div>
            </div>

            {/* Key Benefits */}
            {/* <div className="grid grid-cols-2 gap-2 sm:gap-3 py-2 sm:py-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                <span className="text-xs sm:text-sm text-blue-100">Genuine Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                <span className="text-xs sm:text-sm text-blue-100">Best Prices</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                <span className="text-xs sm:text-sm text-blue-100">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-red-400" />
                <span className="text-xs sm:text-sm text-blue-100">Expert Support</span>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <Link href="/products" className="w-fit">
                <Button
                  size="lg"
                  className="w-fit bg-red-500 text-white hover:bg-red-700 font-bold px-6 sm:px-8 py-3 shadow-lg transform hover:scale-105 transition-all flex items-center"
                >
                  Start Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right image + rating */}
          <div className="relative mt-8 sm:mt-0">
            <Image
              src="/man-safety-equipment-work (1).jpg"
              alt="Professional Machinery & Equipment"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-48 sm:h-80 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-blue-950 p-3 sm:p-4 rounded-lg shadow-xl border-2 border-red-400">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-blue-950">4.8★</div>
                <div className="text-xs text-red-500">Rating</div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-800">
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur border border-blue-700 transform hover:scale-105 transition-all">
            <div className="bg-white p-2 sm:p-3 rounded-lg">
              <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-blue-950" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Free Delivery</h3>
              <p className="text-blue-200 text-xs sm:text-sm">On orders over AED 2,000</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur border border-blue-700 transform hover:scale-105 transition-all">
            <div className="bg-white p-2 sm:p-3 rounded-lg">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-950" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">Extended Warranty</h3>
              <p className="text-blue-200 text-xs sm:text-sm">Up to 3 years coverage on eligible products</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur border border-blue-700 transform hover:scale-105 transition-all">
            <div className="bg-white p-2 sm:p-3 rounded-lg">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-950" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base">24/7 Support</h3>
              <p className="text-blue-200 text-xs sm:text-sm">Speak directly with a specialist anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
