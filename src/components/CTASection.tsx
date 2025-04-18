
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free for educators",
  "No credit card required",
  "Cancel anytime",
  "24/7 support",
];

export const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 skew-y-3 transform origin-bottom-right" />
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="px-3 py-1 text-sm font-medium bg-violet-50 text-violet-700 rounded-full mb-4 inline-block">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
              Ready to Transform Your Exam Creation Process?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Join thousands of educators already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white group"
              >
                Try it Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
