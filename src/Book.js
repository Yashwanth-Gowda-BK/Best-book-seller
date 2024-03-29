 const Book = (props) => {
  const { author, title, img, getBook, number } = props;
  // const getSingleBook = ()=>{
  //   getBook(id);
  // }
  return (
    <article className="book">
      <img src={img} alt="title" />
      <h2>{title}</h2>
      {/* <button onClick={() => getBook(id)}>Click me</button> */}
      <h4>{author}</h4>
      <span className="number">{`#${number+1}`}</span>
    </article>
  );
};

export default Book;