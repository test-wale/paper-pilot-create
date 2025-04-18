
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Create Smart Test Papers{" "}
          <span className="text-blue-600">in Seconds</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          AI-powered exam paper generator for Grades 1-12. Perfect for teachers,
          schools, and educational institutions.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Generate Your First Paper <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
