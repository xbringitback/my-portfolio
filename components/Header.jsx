import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "../public/assets/Logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <Image src={Logo} alt="Logo" className="h-12 w-12 rounded-none " />
          {/* <h1 className="text-2xl font-semibold">
            <span className="text-accent ml-1">{`x`}</span>
            bringitback
          </h1> */}
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
