import { FaFacebookF, FaGithub, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    {
        icon: FaXTwitter,
        href: "https://x.com/SanniFav",
    },
    {
        icon: FaGithub,
        href: "https://github.com/sannifavour",
    },
    {
        icon: FaFacebookF,
        href: "https://www.facebook.com/enny.liz.92",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/fav_sanni?stkn=MTBmd3RvOGR5djdhcw==",
    },
];
const footerLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/**logo and copyright */}
                    <div className="text-center md:text-left">
                        <a href="#" className="text-xl font-bold tracking-light">
                            SF<span className="text-primary">.</span>
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Sanni Favour. All rights reserved.
                        </p>
                    </div>
                    {/**Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a 
                             key={link.href} 
                             href={link.href}
                             className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    {/**social links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => (
                            <a 
                             key={idx}
                             href={social.href}
                             className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <social.icon className="w-5 h-5"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
} 