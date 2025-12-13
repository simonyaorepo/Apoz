// NewsArticle subcomponent for modular NewsSection
import React from "react";

export interface NewsArticleProps {
  article: {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    image: string;
    paragraphs: string[];
  };
  onClick?: () => void;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article, onClick }) => (
  <div onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
    <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: 8 }} />
    <h3>{article.title}</h3>
    <p>{article.date} | {article.location} | {article.category}</p>
    {article.paragraphs && article.paragraphs.length > 0 && (
      <ul>
        {article.paragraphs.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    )}
  </div>
);

export default NewsArticle;
