import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/jacobecox", label: "GitHub", Icon: SiGithub },
  { href: "https://www.linkedin.com/in/jacobecox/", label: "LinkedIn", Icon: FaLinkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Jacob Cox. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
