import { Eye, FileText, Microscope } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const clinicalCases = [
  {
    title: "Cross Section View of Eye",
    category: "Anterior Segment",
    // description: "Comprehensive case study of a patient presenting with acute corneal abrasion following foreign body trauma. Documentation includes initial presentation, treatment protocol, and follow-up care.",
    // findings: ["Fluorescein staining positive", "No signs of infection", "Complete healing in 72 hours"],
    image: "/src/assets/images/anterior_segment.jpeg"
  },
  {
    title: "Anterior Capsular Phimosis",
    category: "Anterior Segment",
    // description: "Comprehensive case study of a patient presenting with acute corneal abrasion following foreign body trauma. Documentation includes initial presentation, treatment protocol, and follow-up care.",
    // findings: ["Fluorescein staining positive", "No signs of infection", "Complete healing in 72 hours"],
    image: "/src/assets/images/anterior_segment_2.jpeg"
  },
  {
    title: "90D Optic Disc",
    category: "Posterior Segment",
    // description: "Comprehensive case study of a patient presenting with acute corneal abrasion following foreign body trauma. Documentation includes initial presentation, treatment protocol, and follow-up care.",
    // findings: ["Fluorescein staining positive", "No signs of infection", "Complete healing in 72 hours"],
    image: "/src/assets/images/posterior_segment.jpeg"
  },
  {
    title: "Nuclear Sclerosis",
    category: "Cataract",
    // description: "Post-operative complication following cataract surgery. Documented progression and management strategies to prevent IOL decentration.",
    // findings: ["Progressive capsular contraction", "Managed with YAG capsulotomy", "Successful visual rehabilitation"],
    image: "/src/assets/images/cataract.jpeg"
  },
  {
    title: "Buphthalmous",
    category: "Glaucoma",
    // description: "Early detection and monitoring of pseudoexfoliation syndrome with secondary glaucoma. Long-term management protocol implemented.",
    // findings: ["IOP elevation to 28mmHg", "Gonioscopy showing angle changes", "Stable on topical medication"],
    image: "/src/assets/images/glaucoma.jpeg"
  },
  {
    title: "Pseudoexfoliation",
    category: "Glaucoma",
    // description: "Early detection and monitoring of pseudoexfoliation syndrome with secondary glaucoma. Long-term management protocol implemented.",
    // findings: ["IOP elevation to 28mmHg", "Gonioscopy showing angle changes", "Stable on topical medication"],
    image: "/src/assets/images/glaucoma_2.jpeg"
  }
];

export function ClinicalCases() {
  const categories = ["All", ...new Set(clinicalCases.map(c => c.category))];

  return (
    <section id="cases" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Clinical Cases & Photographs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional documentation of diverse clinical presentations and treatment outcomes
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clinicalCases
                  .filter(c => category === "All" || c.category === category)
                  .map((clinicalCase, index) => (
                    <Card 
                      key={index} 
                      className={`overflow-hidden hover:shadow-xl transition-shadow 'border-2 border-amber-700'
                      }`}
                    >
                      <ImageWithFallback
                        src={clinicalCase.image}
                        alt={clinicalCase.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-amber-700 text-amber-700">
                            {clinicalCase.category}
                          </Badge>
                          {/* {clinicalCase.award && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600">
                              {clinicalCase.award}
                            </Badge>
                          )} */}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          {clinicalCase.title}
                        </h3>
                        
                        {/* <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                          {clinicalCase.description}
                        </p> */}

                        {/* <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Microscope className="h-4 w-4 text-amber-700" />
                            <span className="font-semibold">Key Findings:</span>
                          </div>
                          <ul className="space-y-1 ml-6">
                            {clinicalCase.findings.map((finding, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-amber-700 mt-1">•</span>
                                <span>{finding}</span>
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      </div>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}