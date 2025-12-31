import { MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { testimonialsAPI } from "../../utils/api";
import { toast } from "sonner";

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

export function Testimonials() {
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
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Patient Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from patients and community members about their experiences
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-amber-700" />
            What People Say
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
