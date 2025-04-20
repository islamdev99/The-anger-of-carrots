import React from "react";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  href?: string;
  className?: string;
}

export const PixelButton = ({ 
  children, 
  variant = "primary", 
  href, 
  className = "",
  ...props 
}: PixelButtonProps) => {
  // Set classes based on variant
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#FF6B00] text-white hover:bg-[#E66000]";
      case "secondary":
        return "bg-[#4CAF50] text-white hover:bg-green-600";
      case "light":
        return "bg-[#FFF8E1] text-[#FF6B00] hover:bg-white";
      default:
        return "bg-[#FF6B00] text-white hover:bg-[#E66000]";
    }
  };

  const buttonClasses = `pixel-button font-pixel py-3 px-6 rounded-md text-sm inline-block transition-all ${getVariantClasses()} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
