import ContactForm from "@/components/ContactForm";
import WrapperMaxWidth from "@/components/WrapperMaxWidth";
import { MailIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <WrapperMaxWidth>
        <div className="flex flex-col min-h-screen gap-32 mt-8 lg:flex-row">
          <div className="items-center flex-1">
            <h1 className="text-4xl font-bold uppercase">Kontakt</h1>
            <p className="mt-4">
              Masz pytania? Skontaktuj się z nami, a my postaramy się na nie
              odpowiedzieć.
            </p>
            <p className="flex justify-center">
              <MailIcon className="h-96 w-96" />
            </p>
          </div>
          <ContactForm />
        </div>
      </WrapperMaxWidth>
    </main>
  );
}
