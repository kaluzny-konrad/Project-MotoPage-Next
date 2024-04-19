import { BlogPageInfo } from "./BlogPageInfo";

export type BlogPageData = {
  info: BlogPageInfo;
  rows: BlogPageDataRow[];
};

export type BlogPageDataRow = {
  header: string;
  content: string;
};
