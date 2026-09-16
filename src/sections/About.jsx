import { Code2, Lightbulb, Rocket, User2 } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write clean, organized and maintainable code that is easy to understand and improve."
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "I focus on building fast and responsive websites that provide a smooth user experience."
    },
    {
        icon: User2,
        title: "Collaboration",
        description: "I enjoy working with others, sharing ideas, and contributing effectively to team projects."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "I explore new technologies and creative approches to build better digital experiences."
    }
]

export const About = () => {
    return (
    <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/**Left column */}
                <div className="space-y-2">
                    <div className="animate-fade-in">
                        <span className="px-4 py-1.5 rounded-full glass text-secondary-foreground text-sm font-semibold tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future,
                        <span className="font-serif italic font-normal text-white"> Passionate about building for the web.</span>
                    </h2>
                    <div className="space-y-2 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I am Sanni Favour, a computer science education student in Olabisi Onabanjo University.
                        </p>
                        <p>
                            I'm a passionate web developer who enjoys turning ideas into modern, responsive,
                            and user friendly web experiences. I'm constantly learning and exploring new
                            technologies to create better digital solutions.
                        </p>
                        <p>
                            I'm a dedicated web developer who loves solving problems through techonlogy and creating
                            meaningful digital experiences. I'm always learniing new tools and technologies to 
                            improve my skills and build better websites.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to continuosly learn, innovate, and use technology to build web
                            experiences that solve real problems and make a positive impact."
                        </p>
                    </div>
                </div>
                {/**Right Column - Highlight */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div
                         key={idx}
                          className="glass p-6 rounded-2xl animate-fade-in"
                          style={{
                            animationDelay: `${(idx + 1) * 100}ms`
                          }}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center mb-4 hover:bg-primary/10">
                              <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}