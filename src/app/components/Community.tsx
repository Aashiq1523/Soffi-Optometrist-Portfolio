import { Heart, Users, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { testimonialsAPI } from "../../utils/api";
import { toast } from "sonner";

const outreachActivities = [
  {
    title: "School Eye Screening Program",
    description: "Conducted comprehensive eye screenings for 500+ children, providing free vision tests and distributing educational materials.",
    location: "Primary Schools, District 5",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1758575514478-2cbf66f110aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGV5ZSUyMGNhcmV8ZW58MXx8fHwxNzY2NjU5ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Rural Eye Care Camp",
    description: "Organized free eye examination camp in underserved rural areas, serving 300+ patients and providing spectacles to those in need.",
    location: "Village Health Center",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1758205307876-334bb810a63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjBvdXRyZWFjaHxlbnwxfHx8fDE3NjY2NTk4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "World Sight Day Awareness",
    description: "Led awareness campaign on preventable blindness, reaching 1000+ community members through interactive sessions and demonstrations.",
    location: "Community Center",
    date: "October 2023",
    image: "https://images.unsplash.com/photo-1758205307876-334bb810a63a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjBvdXRyZWFjaHxlbnwxfHx8fDE3NjY2NTk4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const testimonials = [
  {
    name: "Mrs. Sharma",
    role: "Patient",
    content: "Dr. Johnson's compassionate care and thorough examination helped diagnose my eye condition early. Her patient explanations made me feel comfortable throughout the treatment.",
    avatar: "MS"
  },
  {
    name: "Mr. Patel",
    role: "Parent",
    content: "Our daughter's vision therapy sessions with Dr. Johnson were life-changing. She's now excelling in school and her confidence has soared. Truly grateful!",
    avatar: "RP"
  },
  {
    name: "Principal Kumar",
    role: "School Administrator",
    content: "The eye screening program Dr. Johnson organized at our school was exceptional. Her dedication to children's eye health is truly inspiring.",
    avatar: "PK"
  }
];

export function Community() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    testimonial: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await testimonialsAPI.create({
        name: formData.name,
        role: formData.role,
        content: formData.testimonial,
        avatar: formData.name.split(' ').map(n => n[0]).join('').toUpperCase()
      });
      toast.success("Thank you for your testimonial! It will be reviewed and published soon.");
      setFormData({ name: "", role: "", testimonial: "" });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.error("Failed to submit testimonial. Please try again.");
    }
  };

  return (
    <section id="community" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {/* Community Outreach & Testimonials */}Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Making a difference through community engagement and compassionate care
          </p>
        </div>

        {/* Inspirational Quote */}
        {/* <Card className="p-8 mb-12 bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-amber-700">
          <div className="flex items-start gap-4">
            <Heart className="h-8 w-8 text-amber-700 flex-shrink-0 mt-1" />
            <blockquote className="text-xl italic text-gray-800">
              "Despite chaos in life, moments like these fuel me to do more. Every patient interaction, 
              every community program, every life touched - these are the reasons I chose this path."
            </blockquote>
          </div>
        </Card> */}

        {/* Outreach Activities */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <Users className="h-6 w-6 text-amber-700" />
            Outreach Activities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outreachActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <Badge className="mb-3 bg-amber-700 hover:bg-amber-800">
                    {activity.date}
                  </Badge>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                    {activity.description}
                  </p>
                  <p className="text-sm text-amber-700 font-semibold">
                    📍 {activity.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div> */}

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-amber-700" />
            Patient Testimonials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial Submission Form */}
        <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Share Your Experience
          </h3>
          <p className="text-gray-600 mb-6">
            Your feedback helps me grow and serve the community better
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Your Name *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Role (e.g., Patient, Parent) *
                </label>
                <Input
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  placeholder="Your role"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Your Testimonial *
              </label>
              <Textarea
                required
                value={formData.testimonial}
                onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
                placeholder="Share your experience..."
                rows={4}
              />
            </div>
            
            <Button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white">
              Submit Testimonial
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}