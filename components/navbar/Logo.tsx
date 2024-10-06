import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <h1 className="text-3xl cursor-pointer">Style.Loom</h1>
      </Link>
    </div>
  );
};

export default Logo;
