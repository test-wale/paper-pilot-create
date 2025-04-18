
import { Brain, Sliders, BookOpen, FileDown, Check } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    title: "AI-Driven Generation",
    description: "Smart question generation powered by advanced AI",
    icon: Brain,
  },
  {
    title: "Multiple Subjects",
    description: "Support for Math, Science, English, and more",
    icon: BookOpen,
  },
  {
    title: "Customizable Difficulty",
    description: "Adjust difficulty levels to match student needs",
    icon: Sliders,
  },
  {
    title: "Instant Export",
    description: "Download papers instantly in PDF format",
    icon: FileDown,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
