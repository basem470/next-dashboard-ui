import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2 lg:justify-start"
    >
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <span className="hidden lg:block">Schooly!</span>
    </Link>
  );
};

export default Logo;
