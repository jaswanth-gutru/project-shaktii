
import { Shield, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Safety Resources": [
      "Self-Defense Tutorials",
      "Emergency Contacts",
      "Safety Audit Guide",
      "Digital Privacy",
    ],
    "Personal Growth": [
      "Confidence Building",
      "Mental Health",
      "Social Skills",
      "Personality Development",
    ],
    "Support": [
      "AI Chatbot",
      "Community Forum",
      "Expert Guidance",
      "Crisis Resources",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-rose-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent">
                Project Shakti
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering girls aged 13-25 with safety skills, confidence building, and personal growth 
              in a secure, supportive environment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@projectshakti.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">24/7 Crisis Support Available</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-rose-900/20 to-violet-900/20 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-rose-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Your Privacy & Safety Matter</h4>
                <p className="text-gray-300 text-sm">
                  We use end-to-end encryption for all communications. Your personal information is never 
                  stored or shared. Anonymous mode is available for all support features.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© 2024 Project Shakti. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:text-rose-400 transition-colors duration-200">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-rose-400 transition-colors duration-200">Terms of Service</a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="h-4 w-4 text-pink-400" />
              <span>Made with care for your safety and growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
