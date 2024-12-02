const data = [
  {
    status: "ok",
    id: "1503212300",
    title: "Invent Your Own Computer Games with Python",
    subtitle: "A beginner's guide to computer programming in Python",
    description:
      "Invent Your Own Computer Games with Python teaches you how to program in the Python language...",
    authors: "Al Sweigart",
    publisher: "CreateSpace",
    pages: "367",
    year: "2015",
    image: "https://www.dbooks.org/img/books/1503212300s.jpg",
    url: "https://www.dbooks.org/invent-your-own-computer-games-with-python-1503212300/",
    download:
      "https://www.dbooks.org/d/1503212300-1635507922-39943ccf97e71c6e/",
  },
];

function BookDetails() {
  return (
    <div>
      <div className="flex gap-4 p-4 text-white">
        <img
          src={data[0].image}
          alt={data[0].title}
          className="h-48 w-48 border-2"
        />
        <div className="flex flex-col gap-1">
          <div className="text-xl">{data[0].title}</div>
          <div className="text-base">{data[0].authors}</div>
        </div>
      </div>
      <div className="p-4 text-white">{data[0].description}</div>
      <div className="p-4 text-white">
        Publisher : {data[0].publisher} <br />
        Pages : {data[0].pages} <br />
        Year : {data[0].year}
      </div>
      <div className="p-4 text-white flex justify-center">
        <a
          href={data[0].download}
          target="_blank"
          rel="noreferrer"
          className="text-slate-900 border-2 border-white p-2 rounded-lg hover:bg-grey-200  bg-white"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default BookDetails;
