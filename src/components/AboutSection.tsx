const AboutSection = () => {
  return (
    <section className="py-24 bg-card/30 backdrop-blur-sm border-y border-border/50 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Quote */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 leading-relaxed">
            I care about systems that survive reality{" "}
            <span className="text-muted-foreground">— not demos that survive notebooks.</span>
          </h2>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a B.Tech student in <span className="text-primary">Artificial Intelligence</span> at VIT Bhopal, 
              focused on building machine learning systems that remain reliable under real-world constraints.
            </p>
            <p>
              My work spans <span className="text-foreground">computer vision</span>, <span className="text-foreground">reinforcement learning</span>, 
              and system-level thinking — where latency, stability, and scale matter as much as accuracy.
            </p>
            <p>
              Outside engineering, I write about science, philosophy, and long-term business thinking. 
              I'm inspired by founders who optimize for decades, not quarters.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="group">
              <p className="font-display text-3xl font-bold text-primary text-glow-cyan group-hover:scale-110 transition-transform duration-300">8.6</p>
              <p className="text-sm text-muted-foreground mt-1">GPA / 10</p>
            </div>
            <div className="group">
              <p className="font-display text-3xl font-bold text-accent text-glow-purple group-hover:scale-110 transition-transform duration-300">20+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects</p>
            </div>
            <div className="group">
              <p className="font-display text-3xl font-bold text-primary text-glow-cyan group-hover:scale-110 transition-transform duration-300">10+</p>
              <p className="text-sm text-muted-foreground mt-1">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
