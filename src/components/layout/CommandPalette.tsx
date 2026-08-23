"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { NAV_LINKS, PROJECTS_DATA, SOCIAL_LINKS } from "@/lib/data";
import { ExternalLink, FileText, Folder, Mail, User } from "lucide-react";
import { useTheme } from "next-themes";
import { Laptop, Moon, Sun } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/${href}`);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {NAV_LINKS.map((nav) => (
            <CommandItem
              key={nav.href}
              value={nav.name}
              onSelect={() => runCommand(() => handleNavClick(nav.href))}
            >
              <User className="mr-2 h-4 w-4" />
              <span>{nav.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Projects">
          {PROJECTS_DATA.slice(0, 5).map((project) => (
            <CommandItem
              key={project.id}
              value={project.title}
              onSelect={() => {
                 runCommand(() => handleNavClick("#projects"));
                 // Ideally this would open a specific project view if we had individual pages
              }}
            >
              <Folder className="mr-2 h-4 w-4" />
              <span>{project.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
            <Laptop className="mr-2 h-4 w-4" />
            <span>System</span>
          </CommandItem>
        </CommandGroup>
         <CommandSeparator />
        <CommandGroup heading="Links">
          {SOCIAL_LINKS.map((link) => (
            <CommandItem
              key={link.href}
              value={link.name}
              onSelect={() => runCommand(() => window.open(link.href, "_blank"))}
            >
              <link.Icon className="mr-2 h-4 w-4" />
              <span>{link.name}</span>
              <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
            </CommandItem>
          ))}
           <CommandItem
              value="Resume"
              onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Resume</span>
              <ExternalLink className="ml-auto h-3 w-3 opacity-50" />
            </CommandItem>
             <CommandItem
              value="Email"
              onSelect={() => runCommand(() => window.location.href = "mailto:tinkalkumar@example.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}