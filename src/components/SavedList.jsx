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
  {
    id: "3030523918",
    title: "The Economics of Big Science",
    subtitle: "Essays by Leading Scientists and Policymakers",
    authors: "Hans\u00a0Peter\u00a0Beck, Panagiotis\u00a0Charitos",
    image: "https://www.dbooks.org/img/books/3030523918s.jpg",
    url: "https://www.dbooks.org/the-economics-of-big-science-3030523918/",
  },
];

function SavedList() {
  return (
    <>
      <div className="flex flex-col bg-section-200 drop-shadow-xl rounded-md py-4 px-5 gap-3">
        <h3 className="text-white font-semibold uppercase text-base">
          Books you read
        </h3>
        <div className="text-white flex gap-4 text-base">
          <div>#️⃣ 2 books</div>
          <div>⭐ 9.20</div>
          <div>🗨️ 2</div>
        </div>
      </div>
      {}
    </>
  );
}

export default SavedList;
