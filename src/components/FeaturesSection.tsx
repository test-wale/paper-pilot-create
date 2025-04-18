
import { Brain, Sliders, BookOpen, FileDown, CheckCircle2, Code2, CloudCog, Lock } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    title: "AI-Driven Generation",
    description: "Smart question generation powered by advanced AI and GPT models",
    icon: Brain,
  },
  {
    title: "Multiple Subjects",
    description: "Comprehensive support for Math, Science, English, and more",
    icon: BookOpen,
  },
  {
    title: "Customizable Difficulty",
    description: "Fine-tune difficulty levels to match student capabilities",
    icon: Sliders,
  },
  {
    title: "Instant Export",
    description: "Download papers instantly in professional PDF format",
    icon: FileDown,
  },
];

const techStack = [
  { icon: Code2, text: "Built with React.js" },
  { icon: CloudCog, text: "Powered by OpenAI" },
  { icon: Lock, text: "AWS Infrastructure" },
  { icon: CheckCircle2, text: "99.9% Uptime" },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-sm font-medium bg-green-50 text-green-700 rounded-full mb-4 inline-block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Educators
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to create professional exam papers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
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

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Powered by Modern Tech Stack</h3>
            <p className="text-gray-600">Built with reliability and scale in mind</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-50">
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
