import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("recent");

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
      <div className="h-screen w-screen bg-background p-5 flex flex-col items-center">
        <Navbar query={query} setQuery={setQuery} />
        <Sections books={books} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
