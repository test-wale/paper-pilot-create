
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
          Create Smart Test Papers{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            in Seconds
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI-powered exam paper generator for Grades 1-12. Perfect for teachers,
          schools, and educational institutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
            Generate Your First Paper <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            Watch Demo
          </Button>
        </div>
        <div className="mt-12 text-gray-600">
          <p className="text-sm">Trusted by educators worldwide</p>
          <div className="mt-4 flex justify-center gap-8">
            <span className="text-2xl font-semibold">10k+</span>
            <span className="text-2xl font-semibold">50k+</span>
            <span className="text-2xl font-semibold">100+</span>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <span>Teachers</span>
            <span>Papers Generated</span>
            <span>Schools</span>
          </div>
        </div>
      </div>
    </div>
  );
};
