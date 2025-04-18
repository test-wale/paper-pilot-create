
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 skew-y-3 transform origin-bottom-right" />
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            Ready to Transform Your Exam Creation Process?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Start generating smart test papers today - Free for educators!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
            >
              Try it Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
