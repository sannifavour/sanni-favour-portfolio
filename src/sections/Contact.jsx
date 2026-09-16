import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser"

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sannifavour88@gmail.com",
        href: "sannifavour88@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "07017994118",
        href: "+2348103997143",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Ogun state, Nigeria.",
        href: "#"
    }
]

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" })
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS configuration is missing")
            }
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon"
            });
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.log("EmailJS error", error);
            setSubmitStatus({
                type: "error",
                message: error.text || "Failed to send message, please try again later."
            });
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/**Section header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-secondary-foreground text-sm font-semibold">GET IN TOUCH</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-2 animate-fade-in text-primary">Let's build
                        <span className="font-serif italic text-white"> something great.</span>
                    </h2>
                    <p className="text-muted-foreground text-sm animate-fade-in animation-delay-300">
                        Have a project in mind? I would love to hear about it. Send me a message and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 mt-4 rounded-3xl border border-primary/30 animate-fade-in animation-delay-400">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name"
                                    required
                                    type="text"
                                    placeholder="Enter your name...."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary
                                 focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary
                                 focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    type="text"
                                    required
                                    placeholder="Your message...."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary
                                 focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>
                            <Button type="submit" size="lg"
                                className="w-full flex items-center justify-center"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send message {" "}
                                        <Send className="w-5 h-5 inline-block" />
                                    </>
                                )}
                            </Button>
                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 p-4 rounded-xl 
                                    ${submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green/20 text-green-400"
                                        : "bg-red-500/10 border border-red/20 text-red-400"
                                    }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                    {/**Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8 mt-4 border border-primary/30">
                            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex container gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="font-sm">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/**Availability Card */}
                        <div className="rounded-3xl glass p-8 border border-primary/30">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                I'm currently open to new opportunities and exciting projects.
                                Let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}