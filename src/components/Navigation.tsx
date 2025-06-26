
import { useState } from 'react';
import { Shield, MessageCircle, Video, BookOpen, Users, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home', icon: Shield },
    { name: 'AI Support', href: '#chatbot', icon: MessageCircle },
    { name: 'Self-Defense', href: '#tutorials', icon: Video },
    { name: 'Growth', href: '#personality', icon: BookOpen },
    { name: 'Public Skills', href: '#interaction', icon: Users },
    { name: 'Resources', href: '#resources', icon: FileText },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Project Shakti
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
            <Button className="ml-4 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-purple-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
