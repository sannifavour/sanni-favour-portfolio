import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Calculator",
        description: "A functional calculator designed to perform basic mathematical operations",
        image: "/project1.png",
        tags: ["HTML5", "CSS", "JavaScript"]
    },
    {
        title: "Travel Journal",
        description: "A travel journal showcasing places, images and experiences",
        image: "/project2.png",
        tags: ["React", "CSS", "JavaScript"]
    },
    {
        title: "FoodMan",
        description: "A modern and responsive food website that displays different meals for users to order",
        image: "/project3.png",
        tags: ["HTML5", "CSS", "JavaScript"]
    },
    {
        title: "Movie Discovery App",
        description: "A responsive movie discovery application that allows users to search for movies",
        image: "/project5.png",
        tags: ["TailwindCSS", "React", "TMDB API"]
    }
]

export const Projects = () => {
    return( 
    <section id="projects" className="py-14 relative overflow-hidden" >
        {/**Bg Glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10">
            {/**Section header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary uppercase animate-fade-in">Featured Projects</h2>
                <span className="text-md text-white font-semibold animate-fade-in animation-delay-100">Projects I've built while learning and developing my skills as a web developer</span>
            </div>
            {/**Project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                     key={idx}
                     className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                     style={{
                            animationDelay: `${(idx + 1) * 100}ms`
                        }}
                    >
                        {/**Image */}
                        <div className="relative overflow-hidden w-full h-95">
                            <img src={project.image} alt={project.title} className="w-full h-full transition-transform duration-700 group-hover:scale-105"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-20" />
                        </div>
                        {/**Contents */}
                        <div className="p-6 space-y-4" >
                            <div className="flex items-start">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-mediium border
                                border-primary/10 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all 
                                duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>
            {/**View all project button */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton>
                    View all projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
    );
}