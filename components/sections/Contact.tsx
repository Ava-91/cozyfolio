"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { SiTelegram, SiGithub } from "@icons-pack/react-simple-icons";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { socials } from "../constants/socials";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  // Find social links
  const githubSocial = socials.find(s => s.icon === "github");
  const telegramSocial = socials.find(s => s.icon === "telegram");
  const emailSocial = socials.find(s => s.icon === "email");

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl">
        <SectionTitle align="center">
          Let's <span className="text-primary">Connect</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Info */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    Get in touch
                  </h3>
                  <p className="text-sm text-muted">
                    Have a project in mind? I'd love to hear about it.
                  </p>
                </div>

                <div className="space-y-3">
                  {emailSocial && (
                    <a
                      href={emailSocial.href}
                      className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      {emailSocial.href.replace("mailto:", "")}
                    </a>
                  )}
                  {githubSocial && (
                    <a
                      href={githubSocial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      <SiGithub className="w-4 h-4 text-primary shrink-0" />
                      {githubSocial.href.replace("https://", "")}
                    </a>
                  )}
                  {telegramSocial && (
                    <a
                      href={telegramSocial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors duration-200"
                    >
                      <SiTelegram className="w-4 h-4 text-primary shrink-0" />
                      {telegramSocial.href.replace("https://", "")}
                    </a>
                  )}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                {isSubmitted ? (
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20 text-success text-sm">
                    ✨ Thanks for reaching out! I'll get back to you soon.
                  </div>
                ) : (
                  <>
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-background border border-border rounded-xl text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </>
                )}
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;