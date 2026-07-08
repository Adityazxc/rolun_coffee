import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[999]">

      {/* Bubble */}

      <div
        className={`absolute bottom-20 right-0 transition-all duration-500 ${
          showBubble
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-64 rounded-2xl bg-white p-4 shadow-2xl">

          <h3 className="font-semibold text-[#4B2E2B]">
            👋 Halo!
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            Ada yang bisa kami bantu hari ini?
          </p>

          {/* Panah */}

          <div className="absolute -bottom-2 right-6 h-4 w-4 rotate-45 bg-white"></div>

        </div>
      </div>

      {/* Button */}

      <a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >

        {/* Ripple */}

        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>

        <FaWhatsapp className="relative text-4xl" />

      </a>

    </div>
  );
}