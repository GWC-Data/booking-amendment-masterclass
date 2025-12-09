import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, Award, Linkedin, Globe } from "lucide-react";
import Host1 from "@/assets/host1.png";
import Host2 from "@/assets/host2.png";

const HostsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Hosts
              </span>
            </h2>
          </div>

          {/* Hosts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Host 1 */}
            <Card className="p-8 shadow-soft hover:shadow-strong transition-smooth border-2 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="mb-6 flex justify-center">
                  <div className="overflow-hidden rounded-2xl border-2 border-primary">
                    <img
                      src={Host1}
                      alt="Dhanavijhay - AVP"
                      className="h-48 w-48 object-cover object-top"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-1">
                    Dhanavijhay Jayasathiyan
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <p className="text-sm font-semibold">
                      Associate Vice President, GWC Data.AI
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  At GWC DATA.AI, I oversee delivery across analytics, AI, and
                  digital transformation programs, where speed, structure, and
                  clarity drive outcomes. From strategy blueprint to operational
                  adoption, I build scalable systems, empower teams, and drive
                  programs that sustain performance not just complete projects.
                  For me, excellence is not only delivery it’s alignment,
                  accountability, and impact at scale.
                </p>

                <div className="flex justify-center items-center mt-3 gap-4">
                  <a
                    href="https://www.linkedin.com/in/dhana-vijhay-a37a803b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.gwcdata.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe />
                  </a>
                </div>
              </div>
            </Card>

            {/* Host 2 */}
            <Card className="p-8 shadow-soft hover:shadow-strong transition-smooth border-2 hover:border-primary/30">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="mb-6 flex justify-center">
                  <div className="overflow-hidden rounded-2xl border-2 border-primary">
                    <img
                      src={Host2}
                      alt="Srinath Raja - CDO"
                      className="h-48 w-48 object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Srinath Raja</h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <p className="text-sm font-semibold">
                      Chief Data Officer, GWC Data.AI
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  At GWC Data.AI, data is truly the cornerstone of everything we
                  do. Without solid data, no decision can be fully trusted. In
                  my role as Chief Data Officer, I focus on turning complex data
                  into clear, actionable insights that empower our clients to
                  make confident, data-driven choices. My goal is to ensure that
                  every piece of information we provide translates into real
                  business value.
                </p>

                <div className="flex justify-center items-center mt-3 gap-4">
                  <a
                    href="https://www.linkedin.com/in/srinath-raja-8a5710115/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.gwcdata.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
