import React, { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages, Settings } from "lucide-react";

interface SettingsMenuProps {
  className?: string;
}

export function SettingsMenu({ className = "" }: SettingsMenuProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  
  useEffect(() => {
    // Get saved preferences from localStorage if available
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    const savedLanguage = localStorage.getItem('language') as 'ar' | 'en';
    
    if (savedTheme) setTheme(savedTheme);
    if (savedLanguage) setLanguage(savedLanguage);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.documentElement.lang = savedLanguage || 'ar';
    document.documentElement.dir = savedLanguage === 'en' ? 'ltr' : 'rtl';
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  
  const changeLanguage = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    
    // In a real app, this would trigger language string changes
    // For now we'll just reload the page to demonstrate the RTL/LTR switch
    // window.location.reload();
  };

  return (
    <div className={`fixed top-4 left-4 z-50 ${className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full bg-[#1A120B]/50 backdrop-blur-md border-[#E65100] hover:bg-[#E65100]/20">
            <Settings className="h-5 w-5 text-[#FFF8E1]" />
            <span className="sr-only">إعدادات الموقع</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 bg-[#1A120B]/90 backdrop-blur-md border-[#E65100] text-[#FFF8E1]">
          <div className="p-2">
            <h4 className="font-pixel text-sm mb-2 text-[#E65100]">إعدادات الموقع</h4>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4 text-[#FFF8E1]" />
                ) : (
                  <Sun className="h-4 w-4 text-[#E65100]" />
                )}
                <span className="text-sm arabic-text">
                  {theme === 'dark' ? 'الوضع الداكن' : 'الوضع الفاتح'}
                </span>
              </div>
              <Switch 
                checked={theme === 'dark'} 
                onCheckedChange={toggleTheme} 
                className="data-[state=checked]:bg-[#E65100]"
              />
            </div>
            
            <div className="pt-2 pb-1">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Languages className="h-4 w-4 text-[#FFF8E1]" />
                <span className="text-sm arabic-text">اللغة</span>
              </div>
              <div className="grid grid-cols-2 gap-1 pt-1">
                <Button 
                  variant={language === 'ar' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => changeLanguage('ar')}
                  className={language === 'ar' ? "bg-[#E65100] hover:bg-[#FF6B00]" : "hover:text-[#E65100] hover:border-[#E65100]"}
                >
                  العربية
                </Button>
                <Button 
                  variant={language === 'en' ? "default" : "outline"} 
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className={language === 'en' ? "bg-[#E65100] hover:bg-[#FF6B00]" : "hover:text-[#E65100] hover:border-[#E65100]"}
                >
                  English
                </Button>
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}