import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Today's Deals</h2>
        <BookList />
      </main>
    </div>
  );
}

export default App;
