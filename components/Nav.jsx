"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signOut, useSession, getProviders } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { CircleUserRound } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={"/images/logo.svg"}
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">ISAR</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              {session?.user.image === "" ? (
                <CircleUserRound
                  width={37}
                  height={37}
                  className="text-brokenWhite"
                />
              ) : (
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="profile"
                />
              )}
            </Link>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-5">
            {pathname !== "/register" ? (
              <button
                type="button"
                className="black_btn"
                onClick={() => setToggleMenu(false)}
              >
                <Link href="/register">Register Here</Link>
              </button>
            ) : (
              <></>
            )}
            {pathname !== "/sign-in" ? (
              <button type="button" className="outline_btn">
                <Link href="/sign-in">Sign In</Link>
              </button>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {!toggleMenu ? (
          <Menu onClick={() => setToggleMenu(!toggleMenu)} />
        ) : (
          <>
            <X onClick={() => setToggleMenu(false)} />
            {session?.user ? (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleMenu(false)}
                >
                  My Profile
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleMenu(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="dropdown">
                <Link
                  href="/register"
                  className="dropdown_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Register Here
                </Link>
                <Link
                  href="/sign-in"
                  className="dropdown_link"
                  onClick={() => setToggleMenu(false)}
                >
                  Sign In
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
