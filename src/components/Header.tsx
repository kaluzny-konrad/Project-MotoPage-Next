import WrapperMaxWidth from "./WrapperMaxWidth";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full bg-primary h-screen" data-test="Header">
      <Image
        src="/images/mechanic1.jpg"
        alt="header"
        width={1920}
        height={1080}
        quality={100}
        priority
        className="absolute top-15 left-0 w-full h-screen object-cover opacity-30"
      />

      <WrapperMaxWidth className="relative h-screen items-center flex ">
        <div className="flex flex-col items-center mx-auto gap-8 text-center text-secondary">
          <h1 className="text-3xl font-bold lg:text-5xl">
            Usługi mechaniczne najwyższej jakości
          </h1>
          <p className="">
            Zaufaj nam w sprawach motoryzacyjnych: profesjonalizm, elastyczność
            i satysfakcja klienta na pierwszym miejscu!
          </p>
          <Link
            className={cn(buttonVariants({ variant: "secondary" }))}
            href="/oferta"
          >
            Sprawdź ofertę
          </Link>
        </div>
      </WrapperMaxWidth>
    </div>
  );
}
