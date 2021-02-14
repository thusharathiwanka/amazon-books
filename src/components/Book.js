const Book = (props) => {
  const { title, img, author, price } = props.book;
  console.log(props);

  return (
    <div className="book-container">
      <div className="book-img-container">
        <img src={img} alt="book-img" />
      </div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p className="price">$ {price}.00</p>
    </div>
  );
};

export default Book;
