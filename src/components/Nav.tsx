"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const isLoggedIn = true;
  const [toggleDropDown, setToggleDropdown] = useState(false);
  const handleHide = () => {};
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/next.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">NyQuote</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md-gap-5">
            <Link href="/quotes" className="black_btn">
              Quotes
            </Link>
            <button
              type="button"
              onClick={() => setToggleDropdown(prev => !prev)}
              className="outline_btn"
            >
              Favorites
            </button>
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/quotes/1"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Single Quote
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>Nothing Here</>
        )}
      </div>
      <div className="sm:hidden flex relative">
        {isLoggedIn ? (
          <div className="fle">
            <Image
              src="/images/next.svg"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
              onClick={() => setToggleDropdown(prev => !prev)}
            />
            {toggleDropDown && (
              <div className="mobile_dropdown">
                <Link
                  href="/quotes/1"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Single Quote
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <button type="button" onClick={handleHide} className="outline_btn">
              Hide?
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
