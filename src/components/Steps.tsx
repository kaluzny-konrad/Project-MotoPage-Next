type Props = {};

export default function Steps({}: Props) {
  const steps = [
    {
      title: "Zgłoszenie",
      description:
        "Zgłoszenie usterki, ustalenie terminu wizyty, wycena naprawy.",
    },
    {
      title: "Naprawa",
      description:
        "Naprawa zgodnie z ustaleniami, informacja o ewentualnych dodatkowych kosztach.",
    },
    {
      title: "Odbiór",
      description:
        "Odbiór samochodu, ewentualne wyjaśnienie zasad eksploatacji.",
    },
  ];

  return (
    <div className="bg-primary">
      <div className="container py-20 mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-secondary">Jak to działa?</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-4 p-8 text-primary rounded-2xl bg-secondary"
            >
              <h3 className="text-lg font-bold lg:text-xl">{step.title}</h3>
              <p className="">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
