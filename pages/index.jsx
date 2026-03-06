import { motion } from "framer-motion";

const videos = [
  { title: "Ana & Mihai", embed: "https://www.youtube.com/embed/VIDEO1" },
  { title: "Elena & Robert", embed: "https://www.youtube.com/embed/VIDEO2" },
  { title: "Bianca & Alex", embed: "https://www.youtube.com/embed/VIDEO3" }
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center bg-black overflow-hidden">
        <video
          className="absolute w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          src="/hero.mp4"
        />
        <motion.div
          className="relative z-10 max-w-3xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Wedding Films Premium</h1>
          <p className="text-xl mb-6">Minimal, elegant și cinematic pentru ziua ta specială</p>
          <button
            onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-pink-600 rounded-lg text-white font-medium"
          >
            Vezi Portofoliu
          </button>
        </motion.div>
      </section>

      {/* PORTOFOLIU */}
      <section id="portfolio" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Portofoliu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg relative cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <iframe
                className="w-full aspect-video"
                src={video.embed}
                title={video.title}
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white font-medium text-center">
                {video.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-700 mb-6">Dacă îți place stilul meu, contactează-mă:</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.location.href="mailto:youremail@example.com"}
            className="px-6 py-3 bg-pink-600 text-white rounded-lg font-medium"
          >
            Trimite mesaj
          </button>
          <button
            onClick={() => window.location.href="https://wa.me/1234567890"}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium"
          >
            WhatsApp
          </button>
          <button
            onClick={() => window.open("https://instagram.com/username","_blank")}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium"
          >
            Instagram
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 bg-black">
        © 2026 Videograf Nuntă. Toate drepturile rezervate.
      </footer>
    </div>
  );
}
