import { Trophy, Award, Medal, Presentation } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const awards = [
  {
    icon: Medal,
    title: "Gold Medal",
    description: "Awarded for achieving the highest academic performance in Bachelor of Optometry program",
    institution: "Dr. Agarwal's Institute Of Optometry",
    year: "2022",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Trophy,
    title: "Best Poster Award",
    description: "Recognition for outstanding research presentation on Central Serous Retinopathy at ISVTEC Annual Conference",
    institution: "International Society for Vision Training and Eye Care",
    year: "2024",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Presentation,
    title: "Excellence in Clinical Communication",
    description: "Honored for exceptional patient education and counseling skills during clinical rotations",
    institution: "Teaching Hospital Eye Department",
    year: "2023",
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: Award,
    title: "Best Oral Presentation",
    description: "Awarded for comprehensive presentation on smartphone fundus imaging techniques",
    institution: "National Optometry Conference",
    year: "2024",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Trophy,
    title: "Community Service Excellence",
    description: "Recognition for organizing and conducting eye awareness programs in underserved communities",
    institution: "State Health Department",
    year: "2023",
    color: "from-green-400 to-green-600"
  },
  {
    icon: Medal,
    title: "Research Merit Award",
    description: "Acknowledged for outstanding contribution to Wilson Disease case documentation and research",
    institution: "Medical Research Council",
    year: "2024",
    color: "from-red-400 to-red-600"
  }
];

export function Awards() {
  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Awards & Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence in clinical practice, research, and community service
          </p>
        </div>
        
        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-700 to-orange-600"></div>
          
          <div className="space-y-12">
            {awards.map((award, index) => {
              const Icon = award.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  } justify-center`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-amber-700 to-orange-600 border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Award Card */}
                  <Card className={`w-full md:w-5/12 p-6 shadow-lg hover:shadow-xl transition-all ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${award.color} flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-amber-700 hover:bg-amber-800">
                            {award.year}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          {award.title}
                        </h3>
                        
                        <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                          {award.description}
                        </p>
                        
                        <p className="text-sm text-amber-700 font-semibold">
                          {award.institution}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}