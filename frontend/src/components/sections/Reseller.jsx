import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Arabica Gayo",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
    price: "Rp120.000",
    origin: "Aceh Gayo",
  },
  {
    id: 2,
    name: "Java Preanger",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    price: "Rp110.000",
    origin: "West Java",
  },
  {
    id: 3,
    name: "Toraja Kalosi",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
    price: "Rp145.000",
    origin: "South Sulawesi",
  },
  {
    id: 4,
    name: "Kintamani Bali",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    price: "Rp130.000",
    origin: "Bali",
  },
  {
    id: 5,
    name: "Flores Bajawa",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800",
    price: "Rp135.000",
    origin: "NTT",
  },
];

export default function Reseller() {
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slider.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section id="reseller" className="bg-[#f8f5f2] py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-bold text-[#3E2723]">
              Coffee Beans
            </h2>

            <p className="mt-2 text-gray-500">
              Premium Indonesian Coffee
            </p>

          </div>

          <div className="flex gap-3">

            <button
              onClick={scrollLeft}
              className="rounded-full border p-3 transition hover:bg-[#6F4E37] hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollRight}
              className="rounded-full border p-3 transition hover:bg-[#6F4E37] hover:text-white"
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* Slider */}

        <div
          ref={slider}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide
            pb-4
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                min-w-[280px]
                max-w-[280px]
                flex-shrink-0
                snap-start
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-md
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <img
                src={product.imageSrc}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">

                <p className="text-sm text-[#8B6B4A]">
                  {product.origin}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {product.name}
                </h3>

                <p className="mt-3 text-lg font-semibold text-[#6F4E37]">
                  {product.price}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}