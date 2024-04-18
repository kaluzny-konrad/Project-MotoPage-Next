import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import WrapperMaxWidth from "./WrapperMaxWidth";

type Props = {};

export default function OfferTable({}: Props) {
  const offers = [
    {
      name: "Zmiana opon",
      type: "opony",
      price: "500 zł",
    },
    {
      name: "Wymiana oleju",
      type: "konserwacja",
      price: "100 zł",
    },
    {
      name: "Naprawa silnika",
      type: "naprawa",
      price: "1000 zł",
    },
    {
      name: "Naprawa zawieszenia",
      type: "naprawa",
      price: "500 zł",
    },
    {
      name: "Wymiana tarcz hamulcowych",
      type: "konserwacja",
      price: "200 zł",
    },
    {
      name: "Wymiana klocków hamulcowych",
      type: "konserwacja",
      price: "100 zł",
    },
  ];

  return (
    <div>
      <WrapperMaxWidth>
        <div className="flex flex-col gap-2 mt-8 mb-4">
          <h1 className="text-xl font-bold">Oferta</h1>
          <p>Sprawdź listę dostępnych usług.</p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Zdjęcie</span>
              </TableHead>
              <TableHead>Nazwa</TableHead>
              <TableHead className="hidden md:table-cell">Typ</TableHead>
              <TableHead>Cena</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.name}>
                <TableCell className="hidden w-[100px] sm:table-cell">
                  <Image
                    src="placeholder.svg"
                    alt="Offer image"
                    width={100}
                    height={100}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Link href="">
                      <div>
                        <p className="font-bold">{offer.name}</p>
                      </div>
                    </Link>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <p>{offer.type}</p>
                </TableCell>
                <TableCell>
                  <p>{offer.price}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </WrapperMaxWidth>
    </div>
  );
}
