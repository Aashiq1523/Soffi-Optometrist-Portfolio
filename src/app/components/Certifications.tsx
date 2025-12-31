import { Award, CheckCircle, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const certifications = [
  {
    title: "Bachelor of Optometry",
    authority: "Dr. Agarwal's Institute Of Optometry",
    year: "2022",
    type: "Degree",
    honor: "Gold Medalist"
  },
  {
    title: "Mastering Ortho-K and Sclerals",
    authority: "Dr. Agarwal's Institute Of Optometry",
    year: "2025",
    type: "Workshop"
  },
  {
    title: "Optometry Series 2.0 Ep-4 Moderator",
    authority: "Dr. Agarwal's Institute Of Optometry",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Optometric Headaches: Routine to Sinister",
    authority: "Cybersight",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Retina - A Clinical Approach",
    authority: "Optobharat",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Innovations in Keratoconus Detection",
    authority: "Cybersight",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Best Poster Award - Presentation",
    authority: "ISVTEC Annual Conference",
    year: "2025",
    type: "Award"
  },
  {
    title: "Myopia EyeQ Series",
    authority: "Cybersight",
    year: "2025",
    type: "Certification"
  },
  {
    title: "Neuro Opthalmic Emergencies",
    authority: "Cybersight",
    year: "2025",
    type: "Certification"
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Certifications & Honors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A commitment to continuous learning and professional excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-shadow border-t-4 border-amber-700"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    {cert.type === "Degree" ? (
                      <GraduationCap className="h-6 w-6 text-amber-700" />
                    ) : cert.type === "Award" ? (
                      <Award className="h-6 w-6 text-amber-700" />
                    ) : (
                      <CheckCircle className="h-6 w-6 text-amber-700" />
                    )}
                  </div>
                  <Badge 
                    variant="outline" 
                    className="border-amber-700 text-amber-700"
                  >
                    {cert.year}
                  </Badge>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {cert.authority}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {cert.type}
                  </Badge>
                  {cert.honor && (
                    <Badge className="ml-2 bg-yellow-500 hover:bg-yellow-600 text-xs">
                      {cert.honor}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}