import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
];

function Navbar() {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
         window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5" } z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    SF<span className="text-primary">.</span>
                </a>

                {/*Desktop nav*/}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center  gap-2">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-white hover:text-muted-foreground rounded-full hover:bg-surface">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/*CTA Button*/}
                <div className="hidden md:block">
                    <Button 
                     size="sm"
                     onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth"
                        });
                     }}
                    >
                        Contact me
                    </Button>
                </div>

                {/*Mobile menu button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer"
                onClick={() => setisMobileMenuOpen((prev) => !prev)}>
                   {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            {/*Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
                        {navLinks.map((link, index) => (
                            <a
                             href={link.href} 
                             key={index} 
                             onClick={ () => setisMobileMenuOpen(false)}
                             className="text-lg text-primary-foreground hover:text-muted-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button onClick={ () => { setisMobileMenuOpen(false);
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth"
                            });
                        }}
                        >
                            Contact me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
};

export default Navbar;