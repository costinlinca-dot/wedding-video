import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Instagram, Play } from "lucide-react";

export default function WeddingVideographerSite() {
  const videos = [
    { title: "Ana & Mihai", embed: "https://www.youtube.com/embed/VIDEO1" },
    { title: "Elena & Robert", embed: "https://www.youtube.com/embed/VIDEO2" },
    { title: "Bianca & Alex", embed: "https://www.youtube.com/embed/VIDEO3" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Nume Videograf</h1>
        <div className="flex gap-4">
          <Button variant="outline"><Instagram className="w-4 h-4 mr-2"/>Instagram</Button>
          <Button><Mail className="w-4 h-4 mr-2"/>Contact</Button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <h2 className="text-4xl font-bold mb-6">Wedding Films</h2>
          <p className="text-lg text-gray-600 mb-6">
            Creez filme de nuntă cinematice care spun povestea voastră exact așa cum a fost: reală, emoționantă și autentică.
          </p>
          <Button size="lg"><Play className="w-4 h-4 mr-2"/>Vezi Portofoliu</Button>
        </motion.div>

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/VIDEO1"
            title="Wedding Highlight"
            allowFullScreen
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-12 text-center">Portofoliu</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <Card key={i} className="rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  <iframe
                    className="w-full aspect-video"
                    src={video.embed}
                    title={video.title}
                    allowFullScreen
                  />
                  <div className="p-4 font-medium">{video.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Hai să spunem povestea voastră</h3>
        <p className="text-gray-600 mb-8">
          Dacă îți place stilul meu de filmare, scrie-mi și verificăm disponibilitatea pentru data nunții voastre.
        </p>
        <Button size="lg"><Mail className="w-4 h-4 mr-2"/>Trimite mesaj</Button>
      </section>

      <footer className="border-t py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nume Videograf. All rights reserved.
      </footer>
    </div>
  );
}
