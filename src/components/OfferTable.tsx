import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

export default function OfferTable({}: Props) {
  const offers = [
    {
      name: "Zmiana opon",
      type: "opony",
      price: "500.00 zł",
    },
    {
      name: "Wymiana oleju",
      type: "konserwacja",
      price: "100.00 zł",
    },
    {
      name: "Naprawa silnika",
      type: "naprawa",
      price: "1000.00 zł",
    },
    {
      name: "Naprawa zawieszenia",
      type: "naprawa",
      price: "500.00 zł",
    },
    {
      name: "Wymiana tarcz hamulcowych",
      type: "konserwacja",
      price: "200.00 zł",
    },
    {
      name: "Wymiana klocków hamulcowych",
      type: "konserwacja",
      price: "100.00 zł",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Oferta</CardTitle>
        <CardDescription>Sprawdź listę dostępnych usług.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Zdjęcie</span>
              </TableHead>
              <TableHead>Nazwa</TableHead>
              <TableHead>Typ</TableHead>
              <TableHead className="hidden md:table-cell">Cena</TableHead>
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
                    <div>
                      <p className="font-bold">{offer.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p>{offer.type}</p>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <p>{offer.price}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
}
