import React from "react";

const QuotesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Quote Layout here</h1>
      <hr />
      <section>{children}</section>
      <h2>Go Back</h2>
    </div>
  );
};

export default QuotesLayout;
