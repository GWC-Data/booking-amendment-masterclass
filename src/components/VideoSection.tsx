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
              {/* Replace above div with actual YouTube embed: */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Wiru_U36CFk?si=ghPNvlfk6PeB5mmN"
                title="Masterclass Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
