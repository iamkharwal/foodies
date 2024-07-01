/** @format */

import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import s from "./main-header.module.css";
import Image from "next/image";
import NavLink from "../NavLink/nav-link";

const MainHeader = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo}>
        <Image src={logoImg} alt="logo" priority />
        Nextlevel food
      </Link>

      <nav className={s.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
