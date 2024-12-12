"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Components"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">My Portfolio</HoveredLink>
            <HoveredLink href="/courses">Blog Website</HoveredLink>
            <HoveredLink href="/courses">Tailwind Tap</HoveredLink>
            <HoveredLink href="/courses">Authentication</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/Resources"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resources"
          ></MenuItem>
        </Link>

        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Courses"
          ></MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
