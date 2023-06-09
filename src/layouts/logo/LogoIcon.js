import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../public/CaterNinja logo/caterninja.webp";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image src={LogoDark} alt={LogoDark} />
    </Link>
  );
};

export default LogoIcon;
