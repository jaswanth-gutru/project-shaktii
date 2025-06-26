
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, Shield, Lock, Heart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you with any safety concerns, confidence building, or personal growth questions. Your privacy is completely protected - nothing is stored. How can I support you today?",
      isBot: true,
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const exampleQuestions = [
    "I feel unsafe walking alone at night. What should I do?",
    "How can I be more confident in social situations?",
    "Someone is bothering me online. How do I handle this?",
    "I'm being bullied at school. What are my options?"
  ];

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        isBot: true,
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('unsafe') || lowerInput.includes('walking') || lowerInput.includes('night')) {
      return "Here are some safety tips for walking alone: 1) Stay in well-lit areas, 2) Keep your phone charged and accessible, 3) Trust your instincts - if something feels wrong, find a safe place immediately, 4) Consider sharing your location with a trusted friend. Would you like specific self-defense techniques or information about local safety resources?";
    }
    
    if (lowerInput.includes('confident') || lowerInput.includes('social')) {
      return "Building confidence in social situations takes practice! Try these steps: 1) Start with small interactions, 2) Practice good posture and eye contact, 3) Prepare conversation topics beforehand, 4) Remember that most people are understanding. Would you like specific techniques for saying 'no' confidently or handling peer pressure?";
    }
    
    if (lowerInput.includes('online') || lowerInput.includes('cyber') || lowerInput.includes('bothering')) {
      return "Online safety is crucial. Here's what you can do: 1) Block and report the person immediately, 2) Don't engage with harassment, 3) Screenshot evidence, 4) Tell a trusted adult, 5) Review your privacy settings. Remember: this is NOT your fault. Would you like help with specific platform safety settings?";
    }
    
    if (lowerInput.includes('bully') || lowerInput.includes('harassment')) {
      return "I'm sorry you're experiencing this. Here are your options: 1) Document everything (dates, witnesses, evidence), 2) Report to school authorities or HR, 3) Talk to a trusted adult or counselor, 4) Know that this is not your fault, 5) Consider local support resources. Your safety and wellbeing matter. Would you like help finding local support resources?";
    }
    
    return "I understand you're looking for support. Every situation is unique, and I'm here to help you think through your options safely. Can you tell me a bit more about what's concerning you? Remember, if you're in immediate danger, please contact local emergency services. Your safety and privacy are my top priorities.";
  };

  const handleExampleClick = (question: string) => {
    setInputText(question);
  };

  return (
    <section id="chatbot" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">AI Support Chat</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ask Your Problem - <span className="text-purple-600">Get Instant Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized advice for safety, confidence, and personal growth. 
            Your conversations are completely private and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 text-center">
            <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Safety First</h3>
            <p className="text-sm text-gray-600">Immediate safety tips and emergency guidance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-100 text-center">
            <Lock className="h-8 w-8 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">100% Private</h3>
            <p className="text-sm text-gray-600">No data stored, complete anonymity</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100 text-center">
            <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Emotional Support</h3>
            <p className="text-sm text-gray-600">Confidence building and mental wellness</p>
          </div>
        </div>

        <Card className="bg-white shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-purple-600" />
              <span>Secure Support Chat</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 h-80 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-white border border-purple-200 text-gray-800'
                        : 'bg-gradient-to-r from-purple-600 to-teal-500 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-purple-200 px-4 py-2 rounded-2xl">
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">AI is typing...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                <strong>Try asking:</strong>
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleExampleClick(question)}
                    className="text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-sm text-gray-700 transition-colors duration-200"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Describe your situation or question..."
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center">
              🔒 Your privacy is protected. No conversations are stored or shared.
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChatbotSection;
