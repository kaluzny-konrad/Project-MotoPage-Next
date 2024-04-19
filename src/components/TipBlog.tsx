"use client";

import { BlogPageData } from "@/types/BlogPageData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export default function TipBlog({ slug }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["tip", slug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/tips/${slug}`);
      return data as BlogPageData;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (!data) return notFound();

  return (
    <div>
      <h1>{data.info.title}</h1>
      <p>{data.info.description}</p>
      <img src={data.info.imagePath} alt={data.info.title} />
      {data.rows.map((row) => (
        <div key={row.header}>
          <h2>{row.header}</h2>
          <p>{row.content}</p>
        </div>
      ))}
    </div>
  );
}
