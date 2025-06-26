
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const InteractionSection = () => {
  const scenarios = [
    {
      id: 1,
      title: "Job Interview Confidence",
      description: "Master professional communication and present yourself with authority",
      icon: Briefcase,
      color: "purple",
      skills: ["Body language", "Salary negotiation", "Answering tough questions", "Following up professionally"],
    },
    {
      id: 2,
      title: "Handling Strangers Safely",
      description: "Navigate unexpected interactions while maintaining personal safety",
      icon: UserCheck,
      color: "teal",
      skills: ["Reading social cues", "Polite but firm boundaries", "Exit strategies", "Trust your instincts"],
    },
    {
      id: 3,
      title: "Peer Pressure Resistance",
      description: "Stay true to your values while maintaining friendships",
      icon: AlertTriangle,
      color: "pink",
      skills: ["Saying no confidently", "Suggesting alternatives", "Finding supportive friends", "Building self-worth"],
    },
  ];

  const practiceExercises = [
    {
      scenario: "A stranger approaches you asking for personal information",
      options: [
        "Politely decline and change the subject",
        "Provide vague, non-specific answers",
        "Excuse yourself and move to a public area",
        "All of the above"
      ],
      correct: 3,
      explanation: "The best approach combines all these strategies - stay polite but firm, avoid giving details, and prioritize your safety by moving to where others can see you."
    },
    {
      scenario: "Friends are pressuring you to do something that makes you uncomfortable",
      options: [
        "Go along to avoid conflict",
        "Say 'I'm not comfortable with that' and suggest an alternative",
        "Make an excuse and leave",
        "Argue with them about why it's wrong"
      ],
      correct: 1,
      explanation: "Direct, honest communication about your boundaries, paired with offering an alternative, shows confidence while maintaining relationships."
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-50 to-purple-100 border-purple-200",
      teal: "from-teal-50 to-teal-100 border-teal-200",
      pink: "from-pink-50 to-pink-100 border-pink-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const getIconColor = (color: string) => {
    const colorMap = {
      purple: "text-purple-600",
      teal: "text-teal-600",
      pink: "text-pink-600",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section id="interaction" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
            <Users className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">Social Skills Mastery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Navigate <span className="text-teal-600">Public Interactions</span> with Confidence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master professional and social situations with practical scenarios, 
            communication strategies, and confidence-building techniques.
          </p>
        </div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} className={`bg-gradient-to-br ${getColorClasses(scenario.color)} border-2 hover:shadow-xl transition-all duration-300 group`}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <scenario.icon className={`h-8 w-8 ${getIconColor(scenario.color)}`} />
                </div>
                <CardTitle className="text-xl mb-2">{scenario.title}</CardTitle>
                <p className="text-gray-600 text-sm">{scenario.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Skills:</h4>
                  {scenario.skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-white/80 hover:bg-white text-gray-800 border border-gray-200"
                >
                  Practice Scenarios
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Practice Section */}
        <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Practice Makes Perfect
            </h3>
            <p className="text-gray-600">
              Test your skills with real-world scenarios and get instant feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {practiceExercises.map((exercise, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Scenario {index + 1}</CardTitle>
                  <p className="text-gray-600 text-sm">{exercise.scenario}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {exercise.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                          optionIndex === exercise.correct
                            ? 'bg-green-50 border-green-200 hover:bg-green-100'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <span className="font-medium text-sm">
                          {String.fromCharCode(65 + optionIndex)}. {option}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-800">
                      <strong>Tip:</strong> {exercise.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 px-8">
              Take Full Assessment
            </Button>
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold text-xl">1</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Practice Regularly</h4>
            <p className="text-sm text-gray-600">Role-play different scenarios to build muscle memory for confident responses.</p>
          </div>
          <div className="text-center p-6 bg-teal-50 rounded-xl border border-teal-200">
            <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-teal-600 font-bold text-xl">2</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Trust Your Instincts</h4>
            <p className="text-sm text-gray-600">Your intuition is a powerful safety tool. If something feels off, take action.</p>
          </div>
          <div className="text-center p-6 bg-pink-50 rounded-xl border border-pink-200">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-pink-600 font-bold text-xl">3</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Start Small</h4>
            <p className="text-sm text-gray-600">Begin with low-stakes interactions to build confidence for bigger challenges.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractionSection;
