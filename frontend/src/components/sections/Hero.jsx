export default function Hero() {
    return (
      <section className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-white flex items-center">
  
        <div className="max-w-7xl mx-auto px-8">
  
          <h1 className="text-6xl font-bold text-amber-900 leading-tight">
  
            Reserve Your
  
            <br />
  
            Special Event
  
          </h1>
  
          <p className="mt-6 text-gray-600 max-w-xl text-lg">
  
            Celebrate unforgettable moments with premium coffee,
            delicious food, and a cozy atmosphere perfect for
            birthdays, meetings, gatherings, and private events.
  
          </p>
  
          <div className="mt-10 flex gap-5">
  
            <button className="bg-amber-900 text-white px-8 py-4 rounded-xl hover:bg-amber-800 transition">
  
              Reserve Now
  
            </button>
  
            <button className="border border-amber-900 px-8 py-4 rounded-xl hover:bg-amber-900 hover:text-white transition">
  
              View Packages
  
            </button>
  
          </div>
  
        </div>
  
      </section>
    );
  }