import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "motion/react";


const menus = [
  {
    title: "Home",
    section: "hero",
  },
  {
    title: "About",
    section: "about",
  },
  {
    title: "Facility",
    section: "facility",
  },
  {
    title: "Reseller",
    section: "reseller",
  },
  {
    title: "Reservation",
    section: "reservation",
  },
  {
    title: "Contact",
    section: "contact",
  },
  {
    title: "Bio",
    page: "/bio",
  },
];

// const linkClass ="relative text-gray-700 font-medium transition-all duration-300 hover:text-[var(--bg-rolun)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--bg-rolun)] after:transition-all after:duration-300 hover:after:w-full";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const linkClass =
    "relative text-gray-700 font-medium transition-all duration-300 hover:text-[var(--bg-rolun)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--bg-rolun)] after:transition-all after:duration-300 hover:after:w-full";

  const handleMenu = (menu) => {
    if (menu.page) {
      navigate(menu.page);
      setOpen(false);
      return;
    }

    const scroll = () => {
      const section = document.getElementById(menu.section);

      if (!section) return;

      const navbarHeight =
        document.querySelector("header")?.offsetHeight || 112;

      window.scrollTo({
        top: section.offsetTop - navbarHeight - 20,
        behavior: "smooth",
      });
    };

    if (location.pathname === "/") {
      scroll();
    } else {
      navigate(`/#${menu.section}`);
    }

    setOpen(false);
  };
  return (

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">

      <Container>

        <div className="flex h-28 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
              src={Logo}
              alt="Rolun Reserve"
              className="h-16 w-auto object-contain md:h-24"
            />

          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">

            {menus.map((menu) => (
              <button
                key={menu.title}
                onClick={() => handleMenu(menu)}
                className={linkClass}
              >
                {menu.title}
              </button>
            ))}

          </nav>
          {/* Desktop Button */}
          {/* <div className="hidden md:flex items-center gap-3">

            <Button variant="outline">
              Login
            </Button>

            <Button>
              Reserve
            </Button>

          </div> */}

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

        <AnimatePresence>
          {open && (
            <motion.div
              className="border-t bg-[var(--bg-rolun)] md:hidden rounded-b-3xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Container>
                <div className="flex flex-col gap-5 py-5">
                  {menus.map((menu) => (
                    <a
                      key={menu.title}
                      onClick={() => handleMenu(menu)}
                      className="font-medium !text-white"
                    >
                      {menu.title}
                    </a>
                  ))}

                  <Button>Reserve</Button>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>

      )}

    </header>
  );
}