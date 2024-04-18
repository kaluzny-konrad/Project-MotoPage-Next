import Benefits from "@/components/Benefits";
import CheckOffer from "@/components/CheckOffer";
import Header from "@/components/Header";
import OfferTable from "@/components/OfferTable";
import Steps from "@/components/Steps";
import WrapperMaxWidth from "@/components/WrapperMaxWidth";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <WrapperMaxWidth>
        <OfferTable />
      </WrapperMaxWidth>
    </main>
  );
}
