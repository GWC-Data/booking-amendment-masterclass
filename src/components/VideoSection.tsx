import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold">
            A Sneak Peek Into the{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Future of Logistics
            </span>
          </h2>
          
          {/* Video Card */}
          <Card className="overflow-hidden shadow-strong hover:shadow-glow transition-smooth border-2 border-border">
            <div className="aspect-video bg-muted relative group cursor-pointer">
              {/* Placeholder for video - replace with actual YouTube embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary-light/20">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Replace above div with actual YouTube embed:
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Masterclass Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              */}
            </div>
          </Card>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Get a glimpse of the AI experience you will unlock in this session."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
