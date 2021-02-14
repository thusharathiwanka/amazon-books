import Book from "./Book";

const BookList = () => {
  const books = [
    {
      id: 1,
      title: "The Vanishing Half",
      img: "./images/book1.jpg",
      author: "Brit Bennett",
      price: 8.0,
    },
    {
      id: 2,
      title: "Untamed",
      img: "./images/book2.jpg",
      author: "Glennon Doyle",
      price: 10.0,
    },
    {
      id: 3,
      title: "American Dirt",
      img: "./images/book3.png",
      author: "Jeanine Cummins",
      price: 12.0,
    },
    {
      id: 4,
      title: "The Girl Who Drank the..",
      img: "./images/book4.jpg",
      author: "Kelly Barnhill",
      price: 8.0,
    },
  ];
  console.log(books);
  return (
    <section className="book-list-container">
      {books.map((book) => (
        <Book id={book.id} book={book} />
      ))}
    </section>
  );
};

export default BookList;
