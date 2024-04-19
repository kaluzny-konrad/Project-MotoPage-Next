import React from "react";
import WrapperMaxWidth from "./WrapperMaxWidth";

type Props = {};

export default function CheckOffer({}: Props) {
  return (
    <div className="w-full py-20 bg-primary">
      <WrapperMaxWidth>
        <div className="flex flex-col items-center gap-8 text-center text-secondary">
          <p className="text-4xl font-bold uppercase">Sprawdź ofertę</p>
        </div>
      </WrapperMaxWidth>
    </div>
  );
}
