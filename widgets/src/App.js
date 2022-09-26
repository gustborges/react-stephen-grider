import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react?",
    content: "React is a front end loremispsum",
  },
  {
    title: "Why use React?",
    content: "React is a front end loremispsum",
  },
  {
    title: "How do you use React?",
    content: "You use it by creating a React component",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
