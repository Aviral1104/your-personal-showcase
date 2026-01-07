import { ExternalLink } from "lucide-react";

const cardStyles = [
  {
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    border: "hover:border-violet-500/50",
    text: "group-hover:text-violet-400",
    accent: "text-violet-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    border: "hover:border-cyan-500/50",
    text: "group-hover:text-cyan-400",
    accent: "text-cyan-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    border: "hover:border-pink-500/50",
    text: "group-hover:text-pink-400",
    accent: "text-pink-400",
  },
  {
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    border: "hover:border-green-500/50",
    text: "group-hover:text-green-400",
    accent: "text-green-400",
  },
];

const articles = [
  {
    date: "Jul 25, 2024",
    title: "The Dark Side of the Universe: What We Know About Dark Matter",
    description: "An accessible yet rigorous exploration of dark matter — what we know, what we don't, and why it matters for the structure of the universe.",
    link: "https://medium.com/@AVIRAL.ASTHANA",
  },
  {
    date: "Jul 14, 2024",
    title: "Role of Artificial Intelligence in Modern Astronomy",
    description: "How AI is reshaping modern astronomy, from exoplanet discovery to cosmological simulations.",
    link: "https://medium.com/@AVIRAL.ASTHANA",
  },
  {
    date: "Aug 23, 2022",
    title: "Is Time Travel Real, or Just a Sci-Fi Fantasy?",
    description: "A physics-backed discussion on time travel, relativity, paradoxes, and scientific constraints.",
    link: "https://medium.com/@AVIRAL.ASTHANA",
  },
  {
    date: "2022",
    title: "How Do We Rank Extraterrestrial Civilizations?",
    description: "An exploration of the Kardashev Scale and how humanity might classify advanced extraterrestrial civilizations.",
    link: "https://medium.com/@AVIRAL.ASTHANA",
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Writing & Research
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Exploring science, philosophy, and long-term thinking through written work.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {articles.map((article, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-6 rounded-xl bg-card border border-border transition-all duration-500 hover:-translate-y-2 ${style.glow} ${style.border}`}
              >
                <p className={`font-mono text-xs mb-3 ${style.accent}`}>
                  Medium · {article.date}
                </p>
                <h3 className={`font-display text-lg font-semibold text-foreground mb-2 transition-colors duration-300 ${style.text}`}>
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.description}
                </p>
                <div className={`mt-4 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity ${style.accent}`}>
                  Read article <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href="https://medium.com/@AVIRAL.ASTHANA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors link-underline"
          >
            View all articles on Medium
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
