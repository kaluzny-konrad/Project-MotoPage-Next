import React from "react";
import WrapperMaxWidth from "./WrapperMaxWidth";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full py-56 bg-primary">
        <WrapperMaxWidth>
          <div className="flex flex-col items-center gap-8 text-center text-white">
            <h1 className="text-3xl font-bold lg:text-5xl">
              Usługi mechaniczne najwyższej jakości
            </h1>
            <p className="">
              Zaufaj nam w sprawach motoryzacyjnych: profesjonalizm,
              elastyczność i satysfakcja klienta na pierwszym miejscu!
            </p>
            <Link className={cn(buttonVariants({variant:"secondary"}))} href="/oferta">Sprawdź ofertę</Link>
          </div>
        </WrapperMaxWidth>
    </div>
  );
}
