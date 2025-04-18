
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full">
            AI-Powered Learning
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          Create Smart Test Papers{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            in Seconds
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          AI-powered exam paper generator for Grades 1-12. Perfect for teachers,
          schools, and educational institutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg group">
            Generate Your First Paper 
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg gap-2">
            <Play className="h-4 w-4" /> Watch Demo
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8 animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
            <p className="text-sm text-gray-600">Active Teachers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">50k+</div>
            <p className="text-sm text-gray-600">Papers Generated</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
            <p className="text-sm text-gray-600">Partner Schools</p>
          </div>
        </div>
      </div>
    </div>
  );
};
