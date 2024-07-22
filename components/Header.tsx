import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "../public/assets/logo.png";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4 group">
          <Image src={Logo} alt="Logo" className="h-12 w-12 rounded-lg" />
        </Link>

        <div className="hidden xl:flex items-center gap-4">
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
