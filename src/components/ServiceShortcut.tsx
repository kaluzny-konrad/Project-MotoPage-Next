import React from "react";
import WrapperMaxWidth from "./WrapperMaxWidth";

type Props = {};

export default function ServiceShortcut({}: Props) {
  const services = [
    "elektryka i elektronika",
    "mechanika ogólna",
    "pomoc drogowa i holowanie pojazdów",
    "diagnostyka",
    "serwis klimatyzacji",
    "blacharstwo i lakiernictwo",
    "serwis opon",
    "alternatory i rozruszniki - montaż i naprawa",
    "naprawa układów wydechowych",
    "sprzedaż części zamiennych",
  ];

  return (
    <div className="py-24">
      <WrapperMaxWidth>
        <h2 className="text-3xl font-bold text-center mb-4">Nasze usługi:</h2>
        <ul className="list-disc list-inside">
          {services.map((service) => (
            <li key={service} className="text-xl">
              {service}
            </li>
          ))}
        </ul>
      </WrapperMaxWidth>
    </div>
  );
}
