import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { BestMoments } from "./components/BestMoments";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";
import { ClinicalCases } from "./components/ClinicalCases";
import { Awards } from "./components/Awards";
import { Community } from "./components/Community";
import { Videos } from "./components/Videos";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";
import { AdminPanel } from "./components/AdminPanel";
import { Toaster } from "./components/ui/sonner";
import { Button } from "./components/ui/button";
import { Settings } from "lucide-react";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return (
      <>
        <AdminPanel onBackToSite={() => setShowAdmin(false)} />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Admin Access Button - Fixed position */}
      {/* <Button
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 right-6 z-50 bg-amber-700 hover:bg-amber-800 shadow-lg"
        size="lg"
      >
        <Settings className="mr-2 h-5 w-5" />
        Admin
      </Button> */}

      <Navigation />
      <main>
        <Hero />
        <About />
        <BestMoments />
        <Certifications />
        <Skills />
        <ClinicalCases />
        {/* <Awards /> */}
        {/* <Community /> */}
        {/* <Videos />
        <Blog /> */}
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}