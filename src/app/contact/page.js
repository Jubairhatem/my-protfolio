"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Lock,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Link from "next/link";

export default function ContactPage() {
  const { data: session, isPending } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  if (isPending) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="size-6 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 sm:px-6 lg:px-8">
        <Card className="border-border/60">
          <CardContent className="flex flex-col items-center p-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-muted">
              <Lock className="size-6 text-muted-foreground" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              Sign in required
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You need to sign in to access the contact form. This helps prevent
              spam and ensures genuine inquiries.
            </p>
            <Link href="/sign-in" className="mt-6 w-full">
              <Button className="w-full" size="lg" id="contact-signin-btn">
                Sign In to Continue
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-medium text-foreground underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Have a question or want to work together? Send me a message.
        </p>
        <Separator className="mt-4" />
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="border-border/60">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted && (
                <div className="mb-4 rounded-md bg-muted p-3 text-sm text-foreground">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" id="send-message-btn">
                  <Send className="mr-1.5 size-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <Card className="border-border/60">
            <CardContent className="space-y-5 p-5">
              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Mail className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <Link
                    href="mailto:jubairhatem@gmail.com"
                    className="text-sm font-medium text-foreground hover:underline underline-offset-4"
                  >
                    jubairhatem@gmail.com
                  </Link>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Phone className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Mobile
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    +880 1884-861860
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <MapPin className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted">
                  <MessageCircle className="size-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Discord
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    jh_webdevloper
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Find me on
              </p>
              <div className="flex gap-2">
                <Link
                  href="https://github.com/Jubairhatem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" id="contact-github">
                    <GithubIcon className="mr-1.5 size-3.5" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jubair-hatem-47256b3b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" id="contact-linkedin">
                    <LinkedinIcon className="mr-1.5 size-3.5" />
                    LinkedIn
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
