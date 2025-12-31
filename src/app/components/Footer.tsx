import { Heart, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { handleLinkedInClick, handleInstagramClick } from "../../utils/heroHandlers"; // Handler functions for button clicks

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Soffi A
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Dedicated to providing compassionate, patient-centered eye care and 
              advancing clinical excellence through continuous learning and community service.
            </p>
            <div className="flex gap-4">
              <a
                onClick={handleLinkedInClick}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-amber-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                onClick={handleInstagramClick}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-pink-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#cases" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Clinical Cases
                </a>
              </li>
              {/* <li>
                <a href="#blog" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Blog
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>soffioptometrist@outlook.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>+91 9092506507</span>
              </li>
              {/* <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Eye Care Center<br />123 Medical Plaza<br />City, State 12345</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Soffi A. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for better eye care
            </span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This website does not collect or store personal information. For medical emergencies, please contact your nearest eye care facility.
          </p>
        </div>
      </div>
    </footer>
  );
}