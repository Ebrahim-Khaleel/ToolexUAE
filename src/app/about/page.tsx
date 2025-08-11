import { Shield, Truck, Clock, Award, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getPageSeo } from "@/lib/getPageSeo";

export async function generateMetadata() {
  return await getPageSeo("/about");
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-10 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              About <span className="text-red-500">Toolex UAE</span>
            </h1>
            <p className="text-base sm:text-xl text-blue-100 leading-relaxed">
              Your trusted partner for professional machinery, equipment, and tools 
              serving industries across the United Arab Emirates since our inception.
            </p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-red-500">Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Founded with a vision to provide high-quality industrial equipment and tools, 
                Toolex UAE has grown to become a leading supplier in the region. We understand 
                the unique challenges faced by businesses in the UAE and provide solutions that 
                meet the highest standards of quality and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our commitment to excellence has earned us the trust of over 100+ professionals 
                and businesses across various industries including construction, manufacturing, 
                automotive, and more.
              </p>
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  Get in Touch
                </Button>
              </Link>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <Image
                src="/Toolex-Showroom-6.jpg"
                alt="ToolexUAE"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full h-48 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
              Why Choose <span className="text-red-500">Toolex UAE</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-950 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Genuine Products</h3>
              <p className="text-gray-600 text-sm sm:text-base">All our equipment comes with manufacturer warranties and genuine certifications.</p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-red-500 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm sm:text-base">Free delivery across UAE for orders over AED 2,000.</p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-950 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-sm sm:text-base">Round-the-clock technical assistance and customer support.</p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-red-500 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Quality Assured</h3>
              <p className="text-gray-600 text-sm sm:text-base">All products undergo rigorous quality checks before delivery.</p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-950 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Expert Team</h3>
              <p className="text-gray-600 text-sm sm:text-base">Our experienced professionals provide expert guidance and recommendations.</p>
            </div>
            <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-red-500 p-2 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">UAE Wide Coverage</h3>
              <p className="text-gray-600 text-sm sm:text-base">Serving customers across all emirates with reliable logistics.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-8 sm:py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-4 sm:mb-8 max-w-2xl mx-auto">
            Contact us today for expert advice and competitive quotes on all your equipment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="text-blue-950 hover:bg-blue-100">
                Browse Equipment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
