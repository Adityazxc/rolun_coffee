import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const section = document.querySelector(location.hash);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location]);
}