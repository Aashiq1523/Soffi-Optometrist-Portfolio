import { Play, Youtube } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const videos = [
  {
    title: "Eye Health Awareness Session for Children",
    description: "Interactive session teaching children about the importance of eye care and healthy vision habits.",
    category: "Education",
    duration: "8:45",
    thumbnail: "https://images.unsplash.com/photo-1758575514478-2cbf66f110aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGV5ZSUyMGNhcmV8ZW58MXx8fHwxNzY2NjU5ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
  },
  {
    title: "Understanding Vision Therapy",
    description: "Comprehensive guide to vision therapy techniques and their benefits for patients with binocular vision disorders.",
    category: "Clinical Talk",
    duration: "12:30",
    thumbnail: "https://images.unsplash.com/photo-1632054227742-67e0e23595b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGh0aGFsbW9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NjY1OTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Digital Eye Strain: Prevention & Management",
    description: "Patient education on managing computer vision syndrome and maintaining healthy screen habits.",
    category: "Patient Education",
    duration: "10:15",
    thumbnail: "https://images.unsplash.com/photo-1758656321505-95bf802f9a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGNsaW5pY2FsfGVufDF8fHx8MTc2NjY1OTg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "ISVTEC Conference Presentation Highlights",
    description: "Key moments from my research presentation on smartphone fundus imaging at the ISVTEC conference.",
    category: "Conference",
    duration: "15:20",
    thumbnail: "https://images.unsplash.com/photo-1576670160060-c4e874631c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjY2NTk4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Community Eye Camp Outreach",
    description: "Behind the scenes of our rural eye care camp, bringing vision care to underserved communities.",
    category: "Community Service",
    duration: "6:40",
    thumbnail: "https://images.unsplash.com/photo-1758205307876-334bb810a63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjBvdXRyZWFjaHxlbnwxfHx8fDE3NjY2NTk4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Contact Lens Care Tips",
    description: "Essential guide for contact lens wearers on proper insertion, removal, and maintenance.",
    category: "Patient Education",
    duration: "7:55",
    thumbnail: "https://images.unsplash.com/photo-1632054227742-67e0e23595b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGh0aGFsbW9sb2d5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2NjY1OTg5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export function Videos() {
  return (
    <section id="videos" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Educational Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Clinical talks, patient education, and community outreach highlights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-5">
                <Badge className="mb-3 bg-amber-700 hover:bg-amber-800">
                  {video.category}
                </Badge>
                
                <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                  <Youtube className="h-4 w-4" />
                  <span>Watch on YouTube</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            More videos available on my YouTube channel
          </p>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Youtube className="h-5 w-5" />
            Subscribe to Channel
          </a>
        </div>
      </div>
    </section>
  );
}