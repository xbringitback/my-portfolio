"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { links } from "@/lib/constants";
import Logo from "../public/assets/Logo.png";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-3xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center">
        <div className="mt-16 mb-16 text-center text-2xl">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="h-20 w-20 rounded-full mx-auto mb-12"
            />
            <h2 className="text-4xl font-semibold">
              <p className="">
                Chris<span className="text-accent"> M.</span>
              </p>
            </h2>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`text-xl capitalize hover:text-accent transition-all ${
              pathname === "/contact"
                ? "text-accent border-b-2 border-accent"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
