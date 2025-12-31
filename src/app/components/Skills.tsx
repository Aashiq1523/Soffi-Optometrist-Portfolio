import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    category: "Diagnostics",
    skills: [
      { name: "Refraction & Visual Acuity Testing", level: 95 },
      { name: "Slit Lamp Biomicroscopy", level: 90 },
      { name: "Fundus Examination", level: 88 },
      { name: "Smartphone Fundus Imaging", level: 92 }
    ]
  },
  {
    category: "Clinical Care",
    skills: [
      { name: "Contact Lens Fitting", level: 90 },
      { name: "Ocular Disease Management", level: 87 },
      { name: "Pediatric Eye Care", level: 88 },
      { name: "Anterior Segment Evaluation", level: 90 }
    ]
  },
  {
    category: "Vision Therapy",
    skills: [
      { name: "Binocular Vision Assessment", level: 92 },
      { name: "Vision Training Protocols", level: 88 },
      { name: "Convergence Insufficiency Treatment", level: 85 }
    ]
  },
  {
    category: "Communication & Patient Counseling",
    skills: [
      { name: "Patient Education", level: 95 },
      { name: "Treatment Plan Communication", level: 93 },
      { name: "Empathetic Listening", level: 98 },
      { name: "Multilingual Communication", level: 85 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Professional Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise in optometric care and patient management
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-lg">
              <div className="mb-6">
                <Badge className="bg-amber-700 hover:bg-amber-800 text-white">
                  {category.category}
                </Badge>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-amber-700 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}