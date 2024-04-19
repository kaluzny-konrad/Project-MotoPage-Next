import Benefits from "@/components/Benefits";
import CheckOffer from "@/components/CheckOffer";
import Header from "@/components/Header";
import ServiceShortcut from "@/components/ServiceShortcut";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Header />
      <Benefits />
      <Steps />
      <ServiceShortcut />
      <CheckOffer />
    </main>
  );
}
