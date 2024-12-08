import { Heart, Search, ShoppingCart, UserX } from 'lucide-react';
import React from 'react';
import MobileNavbar from './mobileMenu';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Desktop Navbar */}
      <div className="hidden md:flex h-[100px] w-auto justify-center items-center md:justify-end text-black">
        <div className="flex justify-between w-auto">
          {/* Links Section */}
          <div>
            <ul className="flex gap-10 md:mr-48">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/shop"}>Shop</Link></li>
              <li>About</li>
              <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex gap-16 h-[28px] mr-16">
            <UserX />
            <Search />
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
