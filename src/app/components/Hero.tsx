/**
 * Hero component for the Soffi Optometrist portfolio website.
 * Displays the main introduction section with name, title, description,
 * social media links, and a professional portrait.
 */
import { Download, Linkedin, Instagram } from "lucide-react"; // Icons from Lucide React for buttons
import { Button } from "./ui/button"; // Reusable button component
import { ImageWithFallback } from "./figma/ImageWithFallback"; // Image component with fallback
import { EyeBackground } from "./EyeBackground"; // Custom eye-themed background component
import { handleDownloadResume, handleLinkedInClick, handleInstagramClick } from "../../utils/heroHandlers"; // Handler functions for button clicks

export function Hero() {

  return (
    // Main hero section with full-screen height and gradient background
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 px-4 py-20 relative overflow-hidden">
      {/* Eye-themed background component for visual appeal */}
      <EyeBackground />

      {/* Container for the hero content, responsive grid layout */}
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left column: Text content with name, title, description, and buttons */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          {/* Name and title section */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Soffi A
            </h1>
            <p className="text-2xl md:text-3xl text-amber-700">
              Optometrist
            </p>
          </div>

          {/* Brief description of professional focus */}
          <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            Dedicated to compassionate eye care and clinical excellence.
          </p>

          {/* Action buttons for resume download and social media links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <Button onClick={handleDownloadResume} className="bg-amber-700 hover:bg-amber-800 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button onClick={handleLinkedInClick} variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button onClick={handleInstagramClick} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
          </div>
        </div>

        {/* Right column: Profile image with decorative background */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Animated gradient background behind the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            {/* Professional portrait image with fallback */}
            <ImageWithFallback
              src="\assets\images\me.jpeg"
              alt="Professional portrait of Soffi A"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}