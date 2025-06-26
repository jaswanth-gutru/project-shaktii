
import { Button } from '@/components/ui/button';
import { MessageCircle, Video, BookOpen, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-20 -left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
                <Shield className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Safety • Growth • Confidence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Your Safety &
                </span>
                <br />
                <span className="text-gray-800">Growth Toolkit</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Empowering girls aged 13-25 with self-defense skills, mental resilience, 
                and confidence-building tools in a safe, supportive environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get AI Support
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300"
                onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Video className="h-5 w-5 mr-2" />
                Watch Tutorials
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">8+</div>
                <div className="text-sm text-gray-600">Defense Techniques</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">AI Support</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">100%</div>
                <div className="text-sm text-gray-600">Privacy Safe</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-teal-100 rounded-3xl p-8 shadow-xl">
              <div className="h-full bg-white rounded-2xl p-6 flex flex-col justify-center items-center space-y-6 shadow-inner">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-purple-50 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-purple-700">Self Defense</div>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-teal-700">AI Guidance</div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-pink-700">Growth Tips</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                    <Video className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-medium text-purple-700">Video Library</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-800">All-in-One Platform</div>
                  <div className="text-sm text-gray-600">Everything you need to feel safe and confident</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
