import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import { useEffect, useState } from "react";
const demo = [
  {
    id: "5635349929",
    title: "Beginning Excel 2019",
    subtitle: "",
    authors: "Noreen Brown, Barbara Lave, Hallie Puncochar",
    image: "https://www.dbooks.org/img/books/5635349929s.jpg",
    url: "https://www.dbooks.org/beginning-excel-2019-5635349929/",
  },
  {
    id: "5635417475",
    title: "Building Democracy for All",
    subtitle: "Interactive Explorations of Government and Civic Life",
    authors: "Robert W. Maloy, Torrey Trust",
    image: "https://www.dbooks.org/img/books/5635417475s.jpg",
    url: "https://www.dbooks.org/building-democracy-for-all-5635417475/",
  },
];
function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetch_book() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.dbooks.org/api/search/${query}`,
        controller.signal
      );
      const data = await res.json();
      setBooks(data.books);
      setIsLoading(false);

      return () => {
        controller.abort();
      };
    }
    if (query.length < 3) return;
    fetch_book();
  }, [query]);
  return (
    <>
      <div className="h-screen w-screen">
        <Navbar query={query} setQuery={setQuery} />
        <Sections books={books} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
