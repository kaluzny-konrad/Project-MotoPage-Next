import { BlogPageData } from "@/types/BlogPageData";
import { z } from "zod";

const videos: BlogPageData[] = [
  {
    info: {
      title: "Konserwacja auta - jak często warto ją wykonywać?",
      slug: "konserwacja-auta-jak-czesto-warto-ja-wykonywac",
      date: "2022-01-01",
      description:
        "Jak często warto wykonywać konserwację auta? Jakie są najważniejsze elementy, które warto zabezpieczyć przed korozją? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
      imagePath: "/images/konserwacja-auta.jpg",
    },
    rows: [
      {
        header: "Najważniejsze elementy konserwacji auta",
        content:
          "Najważniejsze elementy konserwacji auta to: podwozie, silnik, wnętrze, opony, hamulce, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu",
      },
      {
        header: "Jak często warto wykonywać konserwację auta?",
        content:
          "Konserwację auta warto wykonywać przynajmniej raz w roku, najlepiej przed zimą. Warto również regularnie sprawdzać stan auta, by uniknąć poważnych usterek.",
      },
      {
        header: "Jak dbać o auto, by służyło Ci jak najdłużej?",
        content:
          "Aby auto służyło Ci jak najdłużej, warto dbać o nie regularnie. Warto sprawdzać stan auta, wymieniać olej, filtry, płyny eksploatacyjne, opony, hamulce, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
    ],
  },
  {
    info: {
      title: "Jak dbać o auto zimą?",
      slug: "jak-dbac-o-auto-zima",
      date: "2022-01-01",
      description:
        "Jak dbać o auto zimą? Jakie są najważniejsze elementy, które warto sprawdzić przed zimą? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
      imagePath: "/images/jak-dbac-o-auto-zima.jpg",
    },
    rows: [
      {
        header: "Jak dbać o auto zimą?",
        content:
          "Aby dbać o auto zimą, warto sprawdzić stan opon, wymienić płyny eksploatacyjne, sprawdzić układ hamulcowy, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
      {
        header: "Jak dbać o auto, by uniknąć problemów zimą?",
        content:
          "Aby uniknąć problemów zimą, warto sprawdzić stan opon, wymienić płyny eksploatacyjne, sprawdzić układ hamulcowy, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
      {
        header: "Jak dbać o auto, by służyło Ci jak najdłużej?",
        content:
          "Aby auto służyło Ci jak najdłużej, warto dbać o nie regularnie. Warto sprawdzać stan auta, wymieniać olej, filtry, płyny eksploatacyjne, opony, hamulce, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
    ],
  },
  {
    info: {
      title: "Jak dbać o auto latem?",
      slug: "jak-dbac-o-auto-latem",
      date: "2022-01-01",
      description:
        "Jak dbać o auto latem? Jakie są najważniejsze elementy, które warto sprawdzić przed latem? Sprawdź, jak dbać o auto, by służyło Ci jak najdłużej.",
      imagePath: "/images/jak-dbac-o-auto-latem.jpg",
    },
    rows: [
      {
        header: "Jak dbać o auto latem?",
        content:
          "Aby dbać o auto latem, warto sprawdzić stan opon, wymienić płyny eksploatacyjne, sprawdzić układ hamulcowy, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
      {
        header: "Jak dbać o auto, by uniknąć problemów latem?",
        content:
          "Aby uniknąć problemów latem, warto sprawdzić stan opon, wymienić płyny eksploatacyjne, sprawdzić układ hamulcowy, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
      {
        header: "Jak dbać o auto, by służyło Ci jak najdłużej?",
        content:
          "Aby auto służyło Ci jak najdłużej, warto dbać o nie regularnie. Warto sprawdzać stan auta, wymieniać olej, filtry, płyny eksploatacyjne, opony, hamulce, układ kierowniczy, układ chłodzenia, układ wydechowy, układ elektryczny, układ paliwowy, układ napędowy, układ hamulcowy, układ klimatyzacji, układ zawieszenia, układ przeniesienia napędu.",
      },
    ],
  },
];

type Props = {
  params: {
    slug: string;
  };
};

export async function GET(req: Request, { params: { slug } }: Props) {
  try {
    const video: BlogPageData | undefined = videos.find(
      (video) => video.info.slug === slug
    );
    if (!video) return new Response("Not found", { status: 404 });
    return new Response(JSON.stringify(video), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError)
      return new Response("Inavlid request data passed", { status: 422 });

    return new Response("Could not fetch data, please try again later", {
      status: 500,
    });
  }
}
