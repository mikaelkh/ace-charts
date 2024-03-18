import Image from "next/image";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="relative h-[4.375rem] aspect-[7.93/1] max-w-[100%]">
      <Image
        fill
        className="object-contain"
        src={"/images/logo.webp"}
        alt="Logo of Ace Gallagher"
        unoptimized
      />
    </div>
  );
};

export default Logo;
