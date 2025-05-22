import Link from "next/link";
import { NavItem } from "./nav-item";
import { MobileNavItem } from "./mobile-nav-item";
import { MobileNavbar } from "./mobile-navbar";
import Image from "next/image";
import NavLogo from "@/assets/brand-logos/nav-logo.png";
import LanceSoftLogo from "@/assets/brand-logos/lancesoft-logo.png"; // Make sure this path matches your project

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container flex items-center justify-between gap-10 py-2">

        {/* Logo + Subtext with LanceSoft Logo to the right */}
        <Link
          href="https://www.lancesoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 h-20"
          aria-label="Go to LanceSoft"
        >
          {/* Main Logo + Subtext */}
          <div className="flex flex-col items-start justify-center w-36 h-30 relative">
            <div className="relative w-full h-12">
              <Image
                src={NavLogo}
                alt="Cloudsuite Flemingo Services logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[10px] text-gray-600 font-['Roboto'] font-bold mt-1 tracking-wide text-center w-full">
              A - LANCESOFT COMPANY
            </span>
          </div>

          {/* LanceSoft Logo on the right */}
          <div className="relative w-[100px] h-12">
            <Image
              src={LanceSoftLogo}
              alt="LanceSoft Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 uppercase">
          <NavItem label="Services" href="#services" />
          <NavItem label="Solutions" href="#solutions" />
          <NavItem label="About Flemingo" href="#About Flemingo " />
          <NavItem label="Say Hey" href="mailto:sales@flemingoservices.com" />
        </nav>

        {/* Mobile Navigation */}
        <MobileNavbar>
          <div className="rounded-b-lg bg-white py-4 container text-foreground shadow-xl">
            <nav className="flex flex-col gap-1 pt-2">
              <MobileNavItem label="Services" href="#services" />
              <MobileNavItem label="Solutions" href="#solutions" />
              <MobileNavItem label="About Flemingo Services" href="#About Flemingo Services" />
              <MobileNavItem label="Say Hey" href="mailto:sales@flemingoservices.com" />
            </nav>
          </div>
        </MobileNavbar>

      </div>
    </header>
  );
};

export default Navbar;
