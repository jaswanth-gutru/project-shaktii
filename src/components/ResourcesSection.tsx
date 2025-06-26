
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Phone, Globe, Heart, Shield, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ResourcesSection = () => {
  const downloadableResources = [
    {
      id: 1,
      title: "Emergency Contacts by Country",
      description: "Comprehensive list of emergency services, hotlines, and support centers worldwide",
      type: "PDF Guide",
      size: "2.1 MB",
      icon: Phone,
      color: "purple",
    },
    {
      id: 2,
      title: "Mental Health Checklist",
      description: "Daily and weekly self-assessment tools for emotional wellbeing",
      type: "Interactive PDF",
      size: "1.8 MB",
      icon: Heart,
      color: "pink",
    },
    {
      id: 3,
      title: "Personal Safety Audit",
      description: "Evaluate your home, workplace, and digital security with this comprehensive guide",
      type: "Checklist",
      size: "3.2 MB",
      icon: Shield,
      color: "teal",
    },
    {
      id: 4,
      title: "Digital Privacy Toolkit",
      description: "Step-by-step guide to securing your online presence and protecting personal data",
      type: "PDF Guide",
      size: "4.5 MB",
      icon: Globe,
      color: "purple",
    },
  ];

  const emergencyContacts = [
    {
      country: "United States",
      contacts: [
        { service: "Emergency Services", number: "911" },
        { service: "Crisis Text Line", number: "Text HOME to 741741" },
        { service: "National Domestic Violence Hotline", number: "1-800-799-7233" },
        { service: "RAINN Sexual Assault Hotline", number: "1-800-656-4673" },
      ]
    },
    {
      country: "United Kingdom",
      contacts: [
        { service: "Emergency Services", number: "999" },
        { service: "Samaritans", number: "116 123" },
        { service: "National Domestic Abuse Helpline", number: "0808 2000 247" },
        { service: "Rape Crisis", number: "0808 802 9999" },
      ]
    },
    {
      country: "Canada",
      contacts: [
        { service: "Emergency Services", number: "911" },
        { service: "Kids Help Phone", number: "1-800-668-6868" },
        { service: "Assaulted Women's Helpline", number: "1-866-863-0511" },
        { service: "Crisis Text Line", number: "Text CONNECT to 686868" },
      ]
    },
  ];

  const mentalHealthResources = [
    {
      title: "Mindfulness & Meditation",
      description: "Free guided meditations and breathing exercises for anxiety management",
      link: "#",
    },
    {
      title: "Therapy Finder",
      description: "Directory of affordable mental health professionals and online counseling options",
      link: "#",
    },
    {
      title: "Support Groups",
      description: "Connect with peer support communities for shared experiences and healing",
      link: "#",
    },
  ];

  const handleDownload = (resource: typeof downloadableResources[0]) => {
    toast({
      title: "Download Started",
      description: `${resource.title} is being downloaded to your device.`,
    });
  };

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
      purple: "text-purple-600 bg-purple-100",
      teal: "text-teal-600 bg-teal-100",
      pink: "text-pink-600 bg-pink-100",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <FileText className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Resource Library</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Essential <span className="text-purple-600">Safety & Wellness</span> Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download comprehensive guides, access emergency contacts, and find mental health support 
            resources to keep you safe and empowered.
          </p>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Download className="h-6 w-6 text-purple-600 mr-2" />
            Downloadable Guides
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {downloadableResources.map((resource) => (
              <Card key={resource.id} className={`bg-gradient-to-br ${getColorClasses(resource.color)} border-2 hover:shadow-xl transition-all duration-300 group`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getIconColor(resource.color)} group-hover:scale-110 transition-transform duration-300`}>
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.size}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{resource.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    onClick={() => handleDownload(resource)}
                    className="w-full bg-white/80 hover:bg-white text-gray-800 border border-gray-200"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Phone className="h-6 w-6 text-purple-600 mr-2" />
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts.map((country, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Globe className="h-5 w-5 text-teal-600 mr-2" />
                    {country.country}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {country.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <div className="font-medium text-sm text-gray-800">{contact.service}</div>
                        </div>
                        <div className="text-sm font-bold text-purple-600">{contact.number}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-4">
              🚨 <strong>In immediate danger?</strong> Contact your local emergency services immediately.
            </p>
            <Button 
              onClick={() => handleDownload(downloadableResources[0])}
              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
            >
              Download Complete Contact List
            </Button>
          </div>
        </div>

        {/* Mental Health Resources */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Heart className="h-6 w-6 text-pink-600 mr-2" />
            Mental Health Support
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {mentalHealthResources.map((resource, index) => (
              <Card key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/80 hover:bg-white text-gray-800 border border-gray-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200 text-center">
            <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              You're Not Alone
            </h4>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
              Remember that seeking help is a sign of strength, not weakness. These resources are here 
              to support you on your journey to safety, confidence, and personal growth.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              Find Local Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
