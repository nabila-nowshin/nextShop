// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Power Your Products <br /> With ProductPulse
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8">
            Manage, track, and optimize your products with our sleek and
            intuitive platform. Built with{" "}
            <span className="text-cyan-400 font-semibold">Next.js</span> and{" "}
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/login"
              className="inline-block bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:from-cyan-500 hover:to-blue-500 transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-cyan-400 text-cyan-400 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="hero.jpg"
            alt="Hero Illustration"
            className="w-full border max-w-md rounded-xl shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
