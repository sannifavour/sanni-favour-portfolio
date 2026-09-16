{/*import { ChevronDown } from "lucide-react"; */}

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Git",
    "GitHub",
    "Tailwind CSS"
]

export const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/**Skills section */}
            <div className="animate-fade-in animation-delay-600">
                <p className="text-sm mb-4 text-center text-muted-foreground">Technologies I work with</p>
                <div className="relative overflow-hidden">
                    <div className="animate-marquee flex">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold hover:text-muted-foreground transition-color">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/**scroll section 
                <div className="mt-20 absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                    <a 
                     href="#about"
                     className="flex flex-col items-center gap-2 text-muted-foreground"
                    >
                        <span className="text-xs uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div> */}
            </div>
        </section>
    );
}