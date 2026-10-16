import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-7 items-center justify-center rounded-md bg-foreground text-background text-xs font-bold">
              JH
            </span>
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Jubair Hatem. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/Jubairhatem"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              id="footer-github"
            >
              <GithubIcon className="size-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jubair-hatem-47256b3b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              id="footer-linkedin"
            >
              <LinkedinIcon className="size-4" />
            </Link>
            <Link
              href="mailto:jubairhatem@gmail.com"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              id="footer-email"
            >
              <Mail className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
