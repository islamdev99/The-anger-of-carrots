import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#FF6B00] transition-transform hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 bg-[#FF6B00] rounded-full mb-4 flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h3 className="font-pixel text-xl text-center text-[#3D2B1F] mb-3">{title}</h3>
      <p className="arabic-text text-center text-gray-700">{description}</p>
    </div>
  );
};
