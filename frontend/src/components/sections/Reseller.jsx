import { ChevronLeft, ChevronRight, X, Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
const products = [
  {
    id: 1,
    name: "Arabica Gayo",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
    origin: "Aceh Gayo",
    priceLabel: "Mulai dari Rp120.000",
    variants: [
      {
        id: 1,
        name: "250 Gram",
        value: "250gr",
      },
      {
        id: 2,
        name: "1000 Gram",
        value: "1000gr",
      },
    ],
  },
  {
    id: 2,
    name: "Java Preanger",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    origin: "West Java",
    priceLabel: "Mulai dari Rp110.000",
    variants: [
      {
        id: 1,
        name: "250 Gram",
        value: "250gr",
      },
      {
        id: 2,
        name: "1000 Gram",
        value: "1000gr",
      },
    ],
  },
  {
    id: 3,
    name: "Toraja Kalosi",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=800",
    origin: "South Sulawesi",
    priceLabel: "Mulai dari Rp145.000",
    variants: [
      {
        id: 1,
        name: "250 Gram",
        value: "250gr",
      },
      {
        id: 2,
        name: "1000 Gram",
        value: "1000gr",
      },
    ],
  },
  {
    id: 4,
    name: "Kintamani Bali",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
    origin: "Bali",
    priceLabel: "Mulai dari Rp130.000",
    variants: [
      {
        id: 1,
        name: "250 Gram",
        value: "250gr",
      },
      {
        id: 2,
        name: "1000 Gram",
        value: "1000gr",
      },
    ],
  },
  {
    id: 5,
    name: "Flores Bajawa",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800",
    origin: "NTT",
    priceLabel: "Mulai dari Rp135.000",
    variants: [
      {
        id: 1,
        name: "250 Gram",
        value: "250gr",
      },
      {
        id: 2,
        name: "1000 Gram",
        value: "1000gr",
      },
    ],
  },
];

export default function Reseller() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const slider = useRef(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

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


  const checkoutWhatsapp = () => {

    if (!selectedProduct) return;

    const message = `Halo Rolun Coffee 👋

Saya ingin memesan produk berikut.

☕ Produk : ${selectedProduct.name}
📦 Variant : ${selectedVariant?.name}
📦 Jumlah : ${qty}
💰 Harga : ${selectedProduct.priceLabel}

📝 Catatan :
${note || "-"}

Terima kasih.`;

    window.open(

      `https://wa.me/6288218018668?text=${encodeURIComponent(message)}`,

      "_blank"

    );

  };
  return (
    <section id="reseller" className="bg-[var(--bg-clear)] py-20">

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
              onClick={() => {
                setSelectedProduct(product);
                setSelectedVariant(product.variants[0]); 
                setQty(1);
                setNote("");
              }}
              className="
                cursor-pointer
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
                {product.priceLabel}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>

      {selectedProduct && (

        

        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white">

            {/* Header */}

            <div className="relative">

              <img
                src={selectedProduct.imageSrc}
                className="h-72 w-full rounded-t-3xl object-cover"
              />

              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 rounded-full bg-white p-2 shadow"
              >
                <X size={22} />
              </button>

            </div>

            <div className="space-y-5 p-6">

              <div>

                <p className="text-sm text-[#8B6B4A]">

                  {selectedProduct.origin}

                </p>

                <h2 className="text-2xl font-bold">

                  {selectedProduct.name}

                </h2>

                <p className="mt-2 text-xl font-bold text-[#6F4E37]">

                  {selectedProduct.priceLabel}

                </p>

              </div>

              {/* Qty */}

              <div>
                <label className="mb-2 block font-medium">

                  Variant

                </label>
                <select
                  value={selectedVariant?.value || ""}
                  onChange={(e) => {
                    const variant = selectedProduct.variants.find(
                      (v) => v.value === e.target.value
                    );

                    setSelectedVariant(variant);
                  }}
                  className="h-11 w-full rounded-lg border"
                >
                  {selectedProduct.variants.map((variant) => (
                    <option
                      key={variant.id}
                      value={variant.value}
                    >
                      {variant.name}
                    </option>
                  ))}
                </select>
                <label className="mb-2 block font-medium">

                  Jumlah

                </label>

                <div className="flex w-fit items-center gap-4 rounded-xl border p-2">

                  <button
                    onClick={() =>
                      qty > 1 &&
                      setQty(qty - 1)
                    }
                  >
                    -
                  </button>

                  <span className="w-8 text-center">

                    {qty}

                  </span>

                  <button
                    onClick={() =>
                      setQty(qty + 1)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Note */}

              <div>

                <label className="mb-2 block font-medium">

                  Catatan

                </label>

                <textarea
                  rows="3"
                  value={note}
                  onChange={(e) =>
                    setNote(e.target.value)
                  }
                  className="w-full rounded-xl border p-3"
                  placeholder="Contoh : Digiling halus..."
                />

              </div>

              <button
                onClick={checkoutWhatsapp}
                className="w-full rounded-xl bg-[#25D366] py-4 font-semibold text-white transition hover:bg-[#1FA851]"
              >

                Pesan via WhatsApp

              </button>

            </div>

          </div>

        </div>

      )}
    </section>
  );
}