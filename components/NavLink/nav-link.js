/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import s from "./nav-link.module.css";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${s.link} ${s.active}` : s.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
