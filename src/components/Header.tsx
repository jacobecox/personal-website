import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#clients", label: "Clients" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/jacobecox", label: "GitHub", Icon: SiGithub },
  { href: "https://www.linkedin.com/in/jacobecox/", label: "LinkedIn", Icon: FaLinkedin },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-primary">
          Jacob Cox
        </Link>
        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
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
      </nav>
    </header>
  );
}
