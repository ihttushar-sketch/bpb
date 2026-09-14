export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** Paragraphs. A paragraph starting with "> " renders as a pull-quote. */
  body: string[];
  image: string;
  imageCaption?: string;
  section: string;
  author: string;
  publishedAt: string;
  tags: string[];
  views: number;
  /** Renders as the big lead story on the home page */
  lead?: boolean;
  /** Appears in the breaking-news ticker */
  breaking?: boolean;
  marked?: string;
};
