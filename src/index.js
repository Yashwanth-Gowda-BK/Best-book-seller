import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {books} from './books'
import Book from './Book'

const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  return (
    <>
    <h1>amazon best sellers</h1>
    <section className="bookList">
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
    </>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
