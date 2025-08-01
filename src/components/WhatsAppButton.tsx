'use client';

import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppButton() {
  return (
    <Button
      onClick={() => {
        window.open(
          `https://wa.me/971586900124?text=${encodeURIComponent(
            `Hi, I'd like to inquire about your products`
          )}`,
          '_blank'
        );
      }}
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 md:p-6 flex items-center justify-center transition-all duration-200 text-sm md:text-base"
    >
      <span className="text-xs md:text-base">Chat with us</span>
      <FontAwesomeIcon icon={faWhatsapp} className="h-12 w-12 md:h-12 md:w-12" />
    </Button>
  );
}
