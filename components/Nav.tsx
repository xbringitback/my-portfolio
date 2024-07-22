"use client";

import React from "react";
import { links, LinkItem } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link: LinkItem, index: number) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          <p>{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
