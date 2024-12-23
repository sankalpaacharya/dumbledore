import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import {
  Search,
  House,
  Pencil,
  NotepadText,
  LucideProps,
  BookOpen,
  Clipboard,
  Dumbbell,
  Lightbulb,
  DollarSign,
  Globe,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { LogOut } from "lucide-react";
const sideBarItems = [
  {
    name: "Search",
    href: "/",
    icon: Search,
  },
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "AI",
    href: "/",
    icon: Pencil,
  },
];

type WorkSpaceItem = {
  title: string;
  icon:
    | React.ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
      >
    | undefined;
  href: string;
};
const workSpaceItems: WorkSpaceItem[] = [
  {
    title: "My 2025 goals",
    icon: NotepadText,
    href: "/my-2025-goals",
  },
  {
    title: "Daily Journal",
    icon: Pencil,
    href: "/daily-journal",
  },
  {
    title: "Reading List",
    icon: BookOpen,
    href: "/reading-list",
  },
  {
    title: "Project Roadmap",
    icon: House,
    href: "/project-roadmap",
  },
  {
    title: "Meeting Notes",
    icon: Clipboard,
    href: "/meeting-notes",
  },
  {
    title: "Workout Plan",
    icon: Dumbbell,
    href: "/workout-plan",
  },
  {
    title: "Ideas & Brainstorm",
    icon: Lightbulb,
    href: "/ideas-brainstorm",
  },
  {
    title: "Personal Budget",
    icon: DollarSign,
    href: "/personal-budget",
  },
  {
    title: "Travel Plans",
    icon: Globe,
    href: "/travel-plans",
  },
  {
    title: "Recipes",
    icon: Utensils,
    href: "/recipes",
  },
];
export default function Sidebar() {
  return (
    <div className="space-y-4 flex flex-col h-full relative">
      <section>
        {sideBarItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex space-x-2 items-center hover:bg-accent p-2 hover:text-accent-foreground rounded-md`}
          >
            <item.icon size={15} />
            <span>{item.name}</span>
          </Link>
        ))}
      </section>
      <section>
        <h3 className="text-xs hover:bg-accent p-2 rounded">Workspace</h3>
        <div className="px-1">
          {workSpaceItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`flex space-x-2 items-center hover:bg-accent p-2 hover:text-accent-foreground rounded-md`}
            >
              {item.icon ? <item.icon size={15} /> : <NotepadText size={15} />}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
      <SignOutButton>
        <button className="flex gap-2 items-center absolute bottom-0 p-2 hover:bg-accent hover:text-accent-foreground rounded-md w-full">
          <LogOut size={15} />
          Logout
        </button>
      </SignOutButton>
    </div>
  );
}
