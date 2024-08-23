import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-background text-foreground p-4 rounded-2xl shadow-md max-w-sm ">
      {/* Title (First Line) */}
      <h2 className="text-xl sm:text-2xl font-bold mb-1">{title}</h2>

      {/* Subtitle (Second Line) */}
      <h3 className="text-base sm:text-lg mb-0">{subtitle}</h3>

      {/* Description (Third Line) */}
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default Card;
