import { ReactNode } from "react";

export type NavItem = {
  title: ReactNode;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/Home",
  },
  {
    title: "Undergraduate",
    href: "/Undergraduate",
  },
  {
    title: "Postgraduate",
    href: "/universitiesPolytechnics",
  },
  {
    title: "Explore",
    href: "/dashboard",
  },
];
