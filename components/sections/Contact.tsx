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
const [error, setError] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);
  setError("");

  try {
    const response = await fetch("https://formspree.io/f/mwvgzdqo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    setIsSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
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
                {isSubmitted && (
                  <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400">
                    ✨ Thanks! Your message has been sent successfully.
                  </div>
                )}

                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />

                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;