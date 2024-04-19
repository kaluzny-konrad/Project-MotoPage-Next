import React from "react";
import WrapperMaxWidth from "./WrapperMaxWidth";

type Props = {};

export default function Benefits({}: Props) {
  const benefits = [
    {
      title: "Profesjonalizm",
      description:
        "Nasi pracownicy to wykwalifikowani fachowcy, którzy zawsze wykonają swoją pracę na najwyższym poziomie.",
    },
    {
      title: "Elastyczność",
      description:
        "Dostosowujemy się do potrzeb klienta, a nasze usługi są zawsze na czas i zgodne z umową.",
    },
    {
      title: "Satysfakcja klienta",
      description:
        "Jesteśmy przekonani, że nasze usługi spełnią oczekiwania każdego klienta i sprawią, że wróci do nas ponownie.",
    },
  ];

  return (
    <div>
      <div className="w-full py-16">
        <WrapperMaxWidth>
          <div className="flex flex-col items-center gap-12 text-center">
            <h2 className="text-xl font-bold lg:text-3xl">
              Dlaczego warto wybrać naszą firmę?
            </h2>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center gap-4 p-8 text-primary rounded-2xl bg-secondary"
                >
                  <h3 className="text-lg font-bold lg:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </WrapperMaxWidth>
      </div>
    </div>
  );
}
