import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
const books = [
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
  return (
    <>
      <div className="h-screen w-screen">
        <Navbar />
        <Sections books={books} />
      </div>
    </>
  );
}

export default App;
