
import { BookOpen, Settings, FileDown, GraduationCap } from "lucide-react";
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
