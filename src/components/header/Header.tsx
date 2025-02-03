import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../img/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-yellowPrimary01 flex items-center justify-center">
      <div className="uppercase font-semibold text-red01 flex items-center justify-around gap-8 p-8">
        <Image alt="Logo" src={Logo} width={200} />

        <nav className="w-auto uppercase font-semibold text-red01 flex items-center justify-between gap-4">
          <Link href="sobre" className="hover:text-yellowLinks">
            Home
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Sobre
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Lojas
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Parceiros
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Receitas
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Contato
          </Link>
          <Link href="sobre" className="hover:text-yellowLinks">
            Trabalhe conosco
          </Link>
        </nav>

        <div className="flex items-center justify-between gap-4">
          <Link href="#">
            <FaFacebook size={32} color="#f0c500" />
          </Link>
          <Link href="#">
            <FaInstagram size={32} color="#f0c500" />
          </Link>
          <Link href="#">
            <FaYoutube size={32} color="#f0c500" />
          </Link>
        </div>

        <button className=" bg-yellowLinks p-4 rounded-full whitespace-nowrap uppercase">Acesse o encarte digital</button>
      </div>
    </header>
  );
};

export default Header;
