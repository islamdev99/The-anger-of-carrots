import React from "react";

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const PixelBorder = ({ children, className = "" }: PixelBorderProps) => {
  return (
    <div className={`pixel-border rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
