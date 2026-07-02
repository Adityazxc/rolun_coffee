import Navbar from "../components/layout/Navbar";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {children}
      </main>
    </>
  );
}