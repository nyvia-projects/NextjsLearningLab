export const GET = async () => {
  const quote = {
    id: 1105,
    author: "someone",
    data: "quote content here",
  };
  // return new Response(null); // to test error
  return new Response(JSON.stringify(quote));
};

// other HTTP methods
