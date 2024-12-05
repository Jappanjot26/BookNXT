import ErrorComp from "./components/ErrorComp";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("recent");
  const [countBooks, setCountBooks] = useState(0);
  const [length, setLength] = useState(false);
  const [error_message, setErrorMessage] = useState("");

  useEffect(() => {
    if (query.length < 3) return;
    const controller = new AbortController();

    async function fetch_book() {
      try {
        setErrorMessage("");
        setIsLoading(true);
        const res = await fetch(`https://www.dbooks.org/api/search/${query}`, {
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();

        setBooks(data.books || []);
        setCountBooks(data.books?.length || 0);
        setLength(data.books?.length > 0);
        if (data.status !== "ok") throw new Error("Book not found");

        return () => {
          controller.abort();
        };
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setErrorMessage(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length <= 3) {
      setBooks([]);
      setCountBooks(0);
      setErrorMessage("Search Something 🔎");
      return;
    }

    fetch_book();
  }, [query]);

  return (
    <div className="h-screen w-screen bg-background p-5 flex flex-col items-center ">
      <Navbar query={query} setQuery={setQuery} countBooks={countBooks} />
      <Sections
        books={books}
        isLoading={isLoading}
        length={length}
        error_message={error_message}
      />
    </div>
  );
}

export default App;
