import { Download, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { EyeBackground } from "./EyeBackground";
import { handleDownloadResume, handleLinkedInClick, handleInstagramClick } from "../../utils/heroHandlers"; // Handler functions for button clicks

export function About() {
  return (
    // About section with white background and eye-themed background
    <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Eye-themed background component for visual appeal */}
      <EyeBackground />

      {/* Container for the about content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          About Me
        </h2>

        {/* Card containing the about text and buttons */}
        <Card className="p-8 shadow-lg border-t-4 border-amber-700">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              I am a dedicated and passionate Optometrist, committed to delivering exceptional primary eye care services. With expertise in comprehensive refractive error assessments and diagnosing a wide range of eye conditions, I strive to provide personalized care to each patient.
            </p>
            
            <p>
              Skilled in operating advanced diagnostic equipment, I leverage slit-lamp photography and smartphone-based fundus imaging (with 20D lens) to capture and document unique ocular presentations. My practice encompasses orthoptic evaluations and tailored vision therapy programs, addressing the full spectrum of visual needs.
            </p>
            
            <p>
              Known for my empathetic approach, I prioritize patient comfort while effectively communicating findings and treatment plans. My commitment to excellence has made me a preferred choice for patients seeking thorough and compassionate eye care.
            </p>
            
            <p className="italic text-amber-800 border-l-4 border-amber-700 pl-4">
              "Despite chaos in life, moments of connection with patients and community 
              fuel me to do more and be better every day."
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
            <Button onClick={handleDownloadResume} className="bg-amber-700 hover:bg-amber-800 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button onClick={handleLinkedInClick} variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
            <Button onClick={handleInstagramClick} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Instagram className="mr-2 h-4 w-4" />
              Follow on Instagram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}