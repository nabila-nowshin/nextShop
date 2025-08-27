// src/components/ProductHighlights.jsx
export default function ProductHighlights() {
  const features = [
    {
      title: "Real-Time Tracking",
      desc: "Monitor your product performance with live insights and detailed analytics.",
      icon: "📊",
    },
    {
      title: "Smart Management",
      desc: "Easily organize, update, and control all your products in one dashboard.",
      icon: "⚡",
    },
    {
      title: "Seamless Integration",
      desc: "Connect with your favorite tools and platforms effortlessly.",
      icon: "🔗",
    },
  ];

  return (
    <section className="bg-gray-950 py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Product Highlights
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Discover the core features that make{" "}
          <span className="text-cyan-400 font-semibold">ProductPulse</span> the
          best choice for managing your products efficiently.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition group border border-gray-800 hover:border-cyan-400"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
