import Navbar from "../components/layout/Navbar";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {children}
      </main>

      <FloatingWhatsapp />
    </>
  );
}