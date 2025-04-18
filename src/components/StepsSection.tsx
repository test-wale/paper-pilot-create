
import { BookOpen, FileDown, GraduationCap, Settings, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";

const steps = [
  {
    title: "Choose Grade",
    description: "Select the appropriate grade level from 1-12",
    icon: GraduationCap,
  },
  {
    title: "Select Subject & Topics",
    description: "Pick from multiple subjects and specific topics",
    icon: BookOpen,
  },
  {
    title: "Set Difficulty Level",
    description: "Customize the difficulty to match your needs",
    icon: Settings,
  },
  {
    title: "Generate PDF",
    description: "Get your exam paper instantly in PDF format",
    icon: FileDown,
  },
];

export const StepsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full mb-4 inline-block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Four Simple Steps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Generate professional exam papers quickly and efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 relative group border-blue-50 hover:border-blue-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-blue-200" />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
