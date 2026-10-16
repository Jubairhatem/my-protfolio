"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUp, signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon, GoogleIcon } from "@/components/icons";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await signUp.email({ name, email, password });
      if (result?.error) {
        setError(result.error.message || "Sign up failed");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider) => {
    setError("");
    try {
      const result = await signIn.social({ provider, callbackURL: "/" });
      if (result?.error) {
        setError(result.error.message || `${provider.charAt(0).toUpperCase() + provider.slice(1)} login is not configured yet.`);
      }
    } catch (err) {
      setError(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login is not configured yet. Add credentials in .env.local.`);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm border-border/60">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-md bg-foreground text-background text-sm font-bold">
            JH
          </div>
          <CardTitle className="text-xl font-bold">Create an account</CardTitle>
          <p className="text-sm text-muted-foreground">
            Sign up to get started
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleSignUp} className="space-y-3" id="signup-form">
            <div className="space-y-2">
              <Label htmlFor="signup-name">Username</Label>
              <Input
                id="signup-name"
                type="text"
                placeholder="Jubair Hatem"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <Input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
              <p className="text-[11px] text-muted-foreground">
                Must be at least 8 characters
              </p>
            </div>
            <Button type="submit" className="w-full" disabled={loading} id="signup-submit-btn">
              {loading ? (
                <>
                  <Loader2 className="mr-1.5 size-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("google")}
              id="signup-google-btn"
            >
              <GoogleIcon className="mr-1.5 size-3.5" />
              Google
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("github")}
              id="signup-github-btn"
            >
              <GithubIcon className="mr-1.5 size-3.5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("discord")}
              id="signup-discord-btn"
            >
              <DiscordIcon className="mr-1.5 size-3.5" />
              Discord
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("linkedin")}
              id="signup-linkedin-btn"
            >
              <LinkedinIcon className="mr-1.5 size-3.5" />
              LinkedIn
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
