import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "../../assets/logo.png";

const menus = [
  { title: "Home", href: "#hero" },
  { title: "Facility", href: "facility" },
  { title: "About", href: "#" },
  { title: "Reseller", href: "#reseller" },
  { title: "Reservation", href: "#reservation" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">

      <Container>

        <div className="flex h-30 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src={Logo}
              alt="Rolun Reserve"
              className="h-16 w-auto object-contain md:h-26"
            />

          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">

            {menus.map((menu) => (
              <a
                key={menu.title}
                href={menu.href}
                className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-[#6F4E37] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#6F4E37] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full"
              >
                {menu.title}
              </a>
            ))}

          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">

            <Button variant="outline">
              Login
            </Button>

            <Button>
              Reserve
            </Button>

          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={28} className="text-[#6F4E37]" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36.3 20.9"
                className="h-6 w-8 fill-[#6F4E37]"
              >
                <path d="M33.7,3.8h-30C3.3,3.8,2.9,3.5,2.9,3s0.3-0.8,0.8-0.8h30c0.4,0,0.8,0.3,0.8,0.8S34.1,3.8,33.7,3.8z" />
                <path d="M18.7,18.8h-15c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h15c0.4,0,0.8,0.3,0.8,0.8S19.1,18.8,18.7,18.8z" />
              </svg>
            )}
          </button>
        </div>

      </Container>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white md:hidden">

          <Container>

            <div className="flex flex-col gap-5 py-5">

              {menus.map((menu) => (
                <a
                  key={menu.title}
                  href={menu.href}
                  className="font-medium text-gray-700"
                >
                  {menu.title}
                </a>
              ))}

              <Button>
                Reserve
              </Button>

            </div>

          </Container>

        </div>

      )}

    </header>
  );
}