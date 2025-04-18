
import { School, Users, GraduationCap, BookOpen } from "lucide-react";

const audiences = [
  {
    title: "Schools",
    icon: School,
    description: "Perfect for educational institutions of all sizes",
  },
  {
    title: "Teachers",
    icon: GraduationCap,
    description: "Streamline your exam creation process",
  },
  {
    title: "Tutors",
    icon: Users,
    description: "Create personalized assessments for your students",
  },
  {
    title: "EdTech Platforms",
    icon: BookOpen,
    description: "Integrate with your existing educational platform",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Who It's For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
              <p className="text-gray-600">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
