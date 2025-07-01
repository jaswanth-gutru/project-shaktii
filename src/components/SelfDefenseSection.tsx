
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Shield, Download, CheckCircle, Play, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const SelfDefenseSection = () => {
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);

  const tutorials = [
    {
      id: 1,
      title: "Basic Strikes",
      description: "Learn palm heel strikes and elbow techniques for close-range defense",
      duration: "8 min",
      difficulty: "Beginner",
      thumbnail: "https://img.youtube.com/vi/T7aNSRoDCmg/maxresdefault.jpg",
      videoId: "T7aNSRoDCmg", // Basic Self Defense Moves
    },
    {
      id: 2,
      title: "Escaping Grabs",
      description: "Techniques to break free from wrist, hair, and chokehold grabs",
      duration: "12 min",
      difficulty: "Beginner",
      thumbnail: "https://img.youtube.com/vi/KVpxP3ZZtAc/maxresdefault.jpg",
      videoId: "KVpxP3ZZtAc", // How to Escape Common Grabs
    },
    {
      id: 3,
      title: "Everyday Objects Defense",
      description: "Using keys, bags, and common items for protection",
      duration: "10 min",
      difficulty: "Beginner",
      thumbnail: "https://img.youtube.com/vi/2REhU6s99Zk/maxresdefault.jpg",
      videoId: "2REhU6s99Zk", // Self Defense with Everyday Objects
    },
    {
      id: 4,
      title: "Public Transport Safety",
      description: "Staying safe on buses, trains, and rideshares",
      duration: "15 min",
      difficulty: "Intermediate",
      thumbnail: "https://img.youtube.com/vi/uOFQkkwqpEE/maxresdefault.jpg",
      videoId: "uOFQkkwqpEE", // Public Transport Safety Tips
    },
    {
      id: 5,
      title: "Online Privacy Defense",
      description: "Protecting yourself from digital harassment and stalking",
      duration: "20 min",
      difficulty: "Intermediate",
      thumbnail: "https://img.youtube.com/vi/drDE7FELVPQ/maxresdefault.jpg",
      videoId: "drDE7FELVPQ", // Online Safety and Privacy
    },
    {
      id: 6,
      title: "Ground Defense",
      description: "Techniques for getting up and escaping ground situations",
      duration: "14 min",
      difficulty: "Advanced",
      thumbnail: "https://img.youtube.com/vi/z7oF4AMAoB8/maxresdefault.jpg",
      videoId: "z7oF4AMAoB8", // Ground Self Defense
    },
    {
      id: 7,
      title: "Verbal Assertiveness",
      description: "Using your voice confidently to de-escalate situations",
      duration: "18 min",
      difficulty: "Beginner",
      thumbnail: "https://img.youtube.com/vi/aP6OqcjkuEk/maxresdefault.jpg",
      videoId: "aP6OqcjkuEk", // Verbal Self Defense
    },
    {
      id: 8,
      title: "Emergency SOS Signals",
      description: "Silent signals and emergency communication techniques",
      duration: "11 min",
      difficulty: "Beginner",
      thumbnail: "https://img.youtube.com/vi/3Z7VJX1QyWs/maxresdefault.jpg",
      videoId: "3Z7VJX1QyWs", // Emergency Hand Signals
    },
  ];

  const handleVideoComplete = (videoId: number) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
      toast({
        title: "Video Completed! 🎉",
        description: "Great job! You're building important safety skills.",
      });
    }
  };

  const handleWatchVideo = (videoId: number) => {
    setCurrentVideo(videoId);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  const handleDownloadGuide = (title: string) => {
    toast({
      title: "Guide Downloaded",
      description: `${title} summary PDF saved to your downloads.`,
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-100 text-emerald-800';
      case 'Intermediate':
        return 'bg-amber-100 text-amber-800';
      case 'Advanced':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const currentVideoData = tutorials.find(t => t.id === currentVideo);

  return (
    <section id="tutorials" className="py-20 bg-gradient-to-br from-rose-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-100 to-violet-100 px-4 py-2 rounded-full mb-4">
            <Video className="h-4 w-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-700">Self-Defense Library</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Master <span className="bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">8+ Defense Techniques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional self-defense tutorials designed specifically for women, 
            with downloadable guides and progress tracking.
          </p>
        </div>

        <div className="mb-8 p-6 bg-gradient-to-r from-rose-50 to-violet-50 rounded-xl border border-rose-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Progress</h3>
              <p className="text-gray-600">
                {completedVideos.length} of {tutorials.length} videos completed
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-rose-600 to-violet-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(completedVideos.length / tutorials.length) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {Math.round((completedVideos.length / tutorials.length) * 100)}%
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:shadow-rose-200/50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-rose-600" />
                    </div>
                  </div>
                  {completedVideos.includes(tutorial.id) && (
                    <div className="absolute top-2 right-2 bg-emerald-500 rounded-full p-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 group-hover:text-rose-600 transition-colors duration-300">
                  {tutorial.title}
                </CardTitle>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-rose-600 to-violet-500 hover:from-rose-700 hover:to-violet-600"
                    onClick={() => handleWatchVideo(tutorial.id)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Watch
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownloadGuide(tutorial.title)}
                    className="border-rose-200 hover:bg-rose-50"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {currentVideo && currentVideoData && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">{currentVideoData.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseVideo}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <div className="aspect-video mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${currentVideoData.videoId}?autoplay=1`}
                    title={currentVideoData.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-gray-600 mb-4">{currentVideoData.description}</p>
                <Button
                  onClick={() => {
                    handleVideoComplete(currentVideo);
                    handleCloseVideo();
                  }}
                  className="bg-gradient-to-r from-rose-600 to-violet-500 hover:from-rose-700 hover:to-violet-600"
                >
                  Mark as Completed
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-rose-50 to-violet-50 rounded-xl p-8 border border-rose-200">
            <Shield className="h-12 w-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Test Your Knowledge
            </h3>
            <p className="text-gray-600 mb-4">
              Take our safety awareness quiz to reinforce what you've learned
            </p>
            <Button className="bg-gradient-to-r from-rose-600 to-violet-500 hover:from-rose-700 hover:to-violet-600">
              Start Safety Quiz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfDefenseSection;
