"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, DiscordIcon, GoogleIcon } from "@/components/icons";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await signIn.email({ email, password });
      if (result?.error) {
        setError(result.error.message || "Invalid credentials");
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
          <CardTitle className="text-xl font-bold">Welcome back</CardTitle>
          <p className="text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleEmailSignIn} className="space-y-3" id="signin-form">
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <Input
                id="signin-email"
                type="email"
                placeholder="jubairhatem@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <Input
                id="signin-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading} id="signin-submit-btn">
              {loading ? (
                <>
                  <Loader2 className="mr-1.5 size-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
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
              id="signin-google-btn"
            >
              <GoogleIcon className="mr-1.5 size-3.5" />
              Google
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("github")}
              id="signin-github-btn"
            >
              <GithubIcon className="mr-1.5 size-3.5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("discord")}
              id="signin-discord-btn"
            >
              <DiscordIcon className="mr-1.5 size-3.5" />
              Discord
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialSignIn("linkedin")}
              id="signin-linkedin-btn"
            >
              <LinkedinIcon className="mr-1.5 size-3.5" />
              LinkedIn
            </Button>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
