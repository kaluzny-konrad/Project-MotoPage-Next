"use client";
import { BlogPageInfo } from "@/types/BlogPageInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";

type Props = {};

export default function TipsList({}: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["tips"],
    queryFn: async () => {
      const { data } = await axios.get("/api/tips");
      return data as BlogPageInfo[];
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {Array.isArray(data) &&
        data.map((tip) => (
          <div key={tip.slug}>
            <Link href={`/porady/${tip.slug}`}>
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
              <img src={tip.imagePath} alt={tip.title} />
            </Link>
          </div>
        ))}
    </div>
  );
}
