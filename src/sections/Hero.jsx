import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaFacebookF, FaGithub, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Download } from "lucide-react";


const socialLinks = [
    {
        icon: <FaXTwitter />,
        href: "https://x.com/SanniFav",
    },
    {
        icon: <FaGithub />,
        href: "https://https://github.com/sannifavour",
    },
    {
        icon: <FaFacebookF />,
        href: "https://www.facebook.com/enny.liz.92",
    },
    {
        icon: <FaInstagram />,
        href: "https://www.instagram.com/fav_sanni?stkn=MTBmd3RvOGR5djdhcw==",
    },
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*BG */}
            <div className="absolute inset-0">
                <img src="/greenbg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
            </div>
            {/**green dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 70 }).map((_, i) => (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            background: "#20B2A6",
                            left: `${(i * 37) % 100}%`,
                            top: `${(i * 53) % 100}%`,
                            animation: `slow-drift ${15 + (i % 10)}s ease-in-out infinite`,
                            animationDelay: `-${i * 0.5}s`,
                        }}
                    />
                ))}
            </div>

            {/**CONTENT */}
            <div className="mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*Left column - text */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-white font-semibold">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse gap-2" /> Web Developer.
                            </span>
                        </div>

                        {/**Headline */}
                        <div className="space-y-2">
                            <h3 className="font-serif italic font-normal text-2xl">Hello,
                                <span className="text-primary">I'm</span>
                            </h3>
                            <h1 className="text-white glow-text text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Sanni Favour
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                I'm a passionate web developer who enjoys creating modern, responsive,
                                and user-friendly websites and web applications.
                            </p>
                        </div>
                        {/**Call to action button */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button
                                size="lg"
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                }}
                            >
                                Contact me <ArrowRight className="w-5 h-5 inline-flex" />
                            </Button>
                            <a href="/Sanni_Favour_CV.pdf" download>
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" /> Download CV
                                </AnimatedBorderButton>
                            </a>
                        </div>
                        {/**SOCIAL LINKS */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me:</span>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/**Right column - Profile image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/**Profile Image */}
                        <div className="relative max-w-sm mx-auto">
                            <div
                                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                            from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profilepics.jpg" alt="Sanni Favour" className="w-full aspect-[4/5] object-cover rounded-2xl" />


                                {/**Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/*Stats Badge 5+ yrs Experience*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}