import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single Quote",
  description: "Single quote fetched from api/quotes",
};

type Quote = {
  id: number;
  author: string;
  data: string;
};

const getQuote = async () => {
  const res = await fetch("http://127.0.0.1:3000/api/quotes", {
    // cache: "no-store",
    next: { revalidate: 5 },
  });
  const data: Quote = await res.json();
  return data;
};

const SingleQuote = async () => {
  const quote = await getQuote();

  if (!quote) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Single Post</h1>
      <p>ID: {quote.id}</p>
      <h2>{quote.author}</h2>
      <blockquote>{quote.data}</blockquote>
    </div>
  );
};

export default SingleQuote;
