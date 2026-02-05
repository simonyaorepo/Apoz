// News article metadata - language-agnostic data
// Image paths, IDs, and other non-translatable content

export interface NewsMetadata {
  id: number;
  image: string;
}

export const NEWS_METADATA: Record<number, NewsMetadata> = {
  17: { id: 17, image: "/assets/images/news/10-30-25.jpg" },
  16: { id: 16, image: "/assets/images/news/10-17-25.jpg" },
  15: { id: 15, image: "/assets/images/news/10-10-25.jpg" },
  14: { id: 14, image: "/assets/images/news/10-08-25.webp" },
  13: { id: 13, image: "/assets/images/news/10-02-25.jpg" },
  12: { id: 12, image: "/assets/images/news/09-30-25.webp" },
  11: { id: 11, image: "/assets/images/news/09-19-25.webp" },
  10: { id: 10, image: "/assets/images/news/07-11-25.jpg" },
  9: { id: 9, image: "/assets/images/news/09-15-25.webp" },
  8: { id: 8, image: "/assets/images/news/08-13-25.jpg" },
  7: { id: 7, image: "/assets/images/news/08-11-25.webp" },
  6: { id: 6, image: "/assets/images/news/07-22-25.jpg" },
  5: { id: 5, image: "/assets/images/news/07-21-25.jpg" },
  4: { id: 4, image: "/assets/images/news/07-17-25.png" },
  3: { id: 3, image: "/assets/images/news/05-20-25.jpg" },
  2: { id: 2, image: "/assets/images/news/05-24-25.jpg" },
  1: { id: 1, image: "/assets/images/news/06-04-25.jpg" },
};
