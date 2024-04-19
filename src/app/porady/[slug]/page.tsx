import TipBlog from "@/components/TipBlog";

type Props = {
  params: {
    slug: string;
  };
};

export default function TipsBlogPage({ params: { slug } }: Props) {
  return <TipBlog slug={slug} />;
}
