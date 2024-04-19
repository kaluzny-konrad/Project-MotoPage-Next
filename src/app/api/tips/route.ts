import { BlogPageInfo } from "@/types/BlogPageInfo";
import { z } from "zod";

const videos: BlogPageInfo[] = [
  {
    title: "Konserwacja auta - jak często warto ją wykonywać?",
    slug: "konserwacja-auta-jak-czesto-warto-ja-wykonywac",
    date: "2022-01-01",
    description:
      "Jak często warto wykonywać konserwację auta? Jakie są najważniejsze elementy, które warto zabezpieczyć przed korozją? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
    imagePath: "/images/konserwacja-auta.jpg",
  },
  {
    title: "Jak dbać o auto zimą?",
    slug: "jak-dbac-o-auto-zima",
    date: "2022-01-01",
    description:
      "Jak dbać o auto zimą? Jakie są najważniejsze elementy, które warto sprawdzić przed zimą? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
    imagePath: "/images/jak-dbac-o-auto-zima.jpg",
  },
  {
    title: "Jak dbać o auto latem?",
    slug: "jak-dbac-o-auto-latem",
    date: "2022-01-01",
    description:
      "Jak dbać o auto latem? Jakie są najważniejsze elementy, które warto sprawdzić przed latem? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
    imagePath: "/images/jak-dbac-o-auto-latem.jpg",
  },
];

export async function GET(req: Request) {
  try {
    return new Response(JSON.stringify(videos), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError)
      return new Response("Inavlid request data passed", { status: 422 });

    return new Response("Could not fetch data, please try again later", {
      status: 500,
    });
  }
}
