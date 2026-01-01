import { Award, Users, BookOpen, Heart, Microscope } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const moments = [
  {
    icon: Award,
    title: "Graduation - Gold Medalist",
    description: "All praise belongs to Almighty 💫 Overwhelmed with gratitude! Graduated as a Gold Medalist🥇. I'll always be grateful for Dr. Agarwal's Institute of Optometry College's exceptional teaching and mentorship. I'm eager to apply my skills and knowledge in the real world.",
    image: "src/assets/images/graduation.jpeg",
    year: "2022"
  },
  {
    icon: Users,
    title: "First Eye Awareness Session with Children",
    description: "The day, unexpected... My first eye awareness session with kids was a blast! 😄 Humour + eye awareness + key lessons = a day to be remembered. Grateful for the red carpet welcome, roses, and respect 🙏. Truly, a day to cherish!",
    image: "src/assets/images/first_eye.jpg",
    year: "2023"
  },
  {
    icon: Microscope,
    title: "Wilson Disease Patient Journey",
    description: "Met a patient living with Wilson's disease since 2013, diagnosed early thanks to a sharp ophthalmologist 👁️. Their brother was identified too late and tragically passed away after a transplant 💔. The patient now manages their symptoms with resilience, medication, and strong support 💪. After leaving a dream engineering career, they're searching for purpose and fulfillment beyond their limitations 🌱.",
    image: "src/assets/images/wd.jpeg",
    year: "2024"
    // featured: true
  },
  {
    icon: Heart,
    title: "Meeting My Guru's Guru",
    description: "When your guru introduces you to their guru, the legacy of wisdom doubles 📚✨ — and the experience becomes truly priceless 🙏💫.",
    image: "src/assets/images/guru.jpeg",
    year: "2025"
  },
  {
    icon: BookOpen,
    title: "ISVTEC Conference Highlights",
    description: "Truly delighted to be part of the International Conference on ISVTEC 2025 🎉 and extremely grateful for the opportunity to present my Oral Poster Presentation on “Development of Instant HeatPack for Portable Management of Meibomian Gland Dysfunction” 🔬. Honoured to receive the BEST POSTER AWARD 🏆. It was an enriching two‑day conference filled with valuable learnings 📚. Heartfelt thanks to all the esteemed speakers for sharing insights on how Eye Care and AI will together shape the future of healthcare 👁️🤖✨.",
    image: "src/assets/images/Isvtec.jpeg",
    year: "2025"
  }
];

export function BestMoments() {
  return (
    <section id="moments" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Best Moments
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A journey of growth, learning, and meaningful connections
        </p>
        
        <div className="space-y-8">
          {moments.map((moment, index) => {
            const Icon = moment.icon;
            return (
              <Card 
                key={index} 
                className={`overflow-hidden`}
              >
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                    <ImageWithFallback
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-76 object-cover rounded-lg"
                    />
                  </div>
                  <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Icon className="h-6 w-6 text-amber-700" />
                      </div>
                      <span className="text-sm font-semibold text-amber-700">{moment.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {moment.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}