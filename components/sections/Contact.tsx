"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";

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
        throw new Error();
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

  const githubSocial = socials.find((s) => s.icon === "github");
  const telegramSocial = socials.find((s) => s.icon === "telegram");
  const emailSocial = socials.find((s) => s.icon === "email");

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-5xl">
        <SectionTitle
          align="center"
          subtitle="Questions, collaboration or just saying hi — my inbox is always open."
        >
          Let’s <span className="text-primary">Connect</span>
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <div className="grid gap-10 md:grid-cols-5">
              {/* Left */}
              <div className="space-y-6 md:col-span-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-text">
                    Get in touch
                  </h3>

                  <p className="text-sm leading-7 text-muted">
                    Whether you have an idea, feedback, or simply want to chat
                    about web development, feel free to send me a message.
                  </p>
                </div>

                <div className="space-y-4">
                  {emailSocial && (
                    <a
                      href={emailSocial.href}
                      className="flex items-center gap-3 text-muted transition hover:text-text"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{emailSocial.href.replace("mailto:", "")}</span>
                    </a>
                  )}

                  {githubSocial && (
                    <a
                      href={githubSocial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted transition hover:text-text"
                    >
                      <SiGithub className="h-5 w-5 text-primary" />
                      <span>{githubSocial.href.replace("https://", "")}</span>
                    </a>
                  )}

                  {telegramSocial && (
                    <a
                      href={telegramSocial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted transition hover:text-text"
                    >
                      <SiTelegram className="h-5 w-5 text-primary" />
                      <span>{telegramSocial.href.replace("https://", "")}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right */}
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:col-span-3"
              >
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
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-text placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
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
                  {isSubmitting ? "Sending..." : "Send Message"}
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