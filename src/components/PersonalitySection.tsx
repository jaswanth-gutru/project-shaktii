
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, PenTool, Star, ArrowRight } from 'lucide-react';

const PersonalitySection = () => {
  const articles = [
    {
      id: 1,
      title: "How to Say No Confidently",
      excerpt: "Learn assertive communication techniques that help you set boundaries without guilt or conflict.",
      readTime: "5 min read",
      category: "Confidence",
      color: "purple",
    },
    {
      id: 2,
      title: "Beat Social Anxiety",
      excerpt: "Practical strategies to feel comfortable in social situations and build meaningful connections.",
      readTime: "8 min read",
      category: "Mental Health",
      color: "teal",
    },
    {
      id: 3,
      title: "Building Inner Strength",
      excerpt: "Develop resilience and emotional intelligence to handle life's challenges with grace.",
      readTime: "6 min read",
      category: "Resilience",
      color: "pink",
    },
    {
      id: 4,
      title: "Body Language Power",
      excerpt: "Master confident body language that commands respect and projects self-assurance.",
      readTime: "7 min read",
      category: "Communication",
      color: "purple",
    },
  ];

  const journalPrompts = [
    "Write about a time you felt proud of standing up for yourself or someone else.",
    "Describe three qualities you love about yourself and why they make you unique.",
    "What would you do if you knew you couldn't fail? Explore your biggest dreams.",
    "Reflect on a challenge you overcame and what it taught you about your strength.",
    "Write a letter to your future self about the confident person you're becoming.",
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      teal: "bg-teal-50 border-teal-200 hover:bg-teal-100",
      pink: "bg-pink-50 border-pink-200 hover:bg-pink-100",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const getCategoryColor = (color: string) => {
    const colorMap = {
      purple: "bg-purple-100 text-purple-800",
      teal: "bg-teal-100 text-teal-800",
      pink: "bg-pink-100 text-pink-800",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section id="personality" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <BookOpen className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Personal Growth</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Build Your <span className="text-purple-600">Confidence & Character</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Develop inner strength, social skills, and emotional resilience with expert guidance 
            and practical exercises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Articles Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Growth Articles</h3>
            </div>
            <div className="space-y-4">
              {articles.map((article) => (
                <Card 
                  key={article.id} 
                  className={`cursor-pointer transition-all duration-300 ${getColorClasses(article.color)} border-2`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(article.color)}`}>
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 ml-4 flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                View All Articles
              </Button>
            </div>
          </div>

          {/* Journal Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <PenTool className="h-5 w-5 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-800">Journal Prompts</h3>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Today's Reflection</span>
              </div>
              <p className="text-gray-800 mb-4 font-medium">
                "{journalPrompts[0]}"
              </p>
              <textarea
                placeholder="Start writing your thoughts here..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500">Your entries are private and secure</span>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                  Save Entry
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800 flex items-center">
                <Heart className="h-4 w-4 text-pink-500 mr-2" />
                More Prompts to Explore
              </h4>
              {journalPrompts.slice(1).map((prompt, index) => (
                <div
                  key={index}
                  className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200 cursor-pointer hover:from-pink-100 hover:to-purple-100 transition-colors duration-300"
                >
                  <p className="text-gray-700 text-sm">"{prompt}"</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl border border-teal-200">
              <h4 className="font-semibold text-gray-800 mb-2">💡 Growth Tip</h4>
              <p className="text-sm text-gray-600">
                Regular journaling can improve self-awareness, reduce anxiety, and boost confidence. 
                Try to write for just 5 minutes each day to see meaningful changes in your mindset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalitySection;
