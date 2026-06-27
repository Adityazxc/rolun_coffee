export default function Navbar() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
  
          <h1 className="text-2xl font-bold text-amber-900">
            ☕ Rolun Reserve
          </h1>
  
          <nav className="hidden md:flex gap-8 font-medium">
  
            <a href="#" className="hover:text-amber-700">
              Home
            </a>
  
            <a href="#" className="hover:text-amber-700">
              About
            </a>
  
            <a href="#" className="hover:text-amber-700">
              Packages
            </a>
  
            <a href="#" className="hover:text-amber-700">
              Gallery
            </a>
  
            <a href="#" className="hover:text-amber-700">
              Contact
            </a>
  
          </nav>
  
          <button className="bg-amber-900 text-white px-5 py-2 rounded-xl hover:bg-amber-800 transition">
            Login
          </button>
  
        </div>
      </header>
    );
  }