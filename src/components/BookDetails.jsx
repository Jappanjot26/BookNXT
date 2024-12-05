import { useEffect, useState } from "react";
import Loading from "./Loading";
import Rating from "./Rating";
import SavedList from "./SavedList";

function BookDetails({ id, setSelectId }) 
{
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const[userRating, setUserRating] = useState("");
  const [watched, setWatched] = useState([{
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
  },]);

    function addWatch(data)
    {
      const newWatch = {
        id:data.id,
        title: data.title,
        subtitle: data.subtitle,
        authors: data.authors,
        image:data.image,
        url: data.url,
        pages:data.pages,
        raintg:userRating,
    };
    setWatched([...watched, newWatch]);
    
  }

  useEffect(() => {
    async function fetchData() {
      if (!id || id === 0) return;
      setIsLoading(true);
      const res = await fetch(`https://www.dbooks.org/api/book/${id}`);

      if (!res.ok) {
        setIsLoading(false);
        setData(null);
        return;
      }
      const data = await res.json();
      setData(data);
      setIsLoading(false);
      setUserRating("");
    }

    fetchData();
  }, [id]);

  if (isLoading) return <Loading />;
  if (!id || id === 0) return <SavedList watched = {watched}/>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-white text-lg bg-red-500 p-4 rounded-md">
          Something went wrong...
        </div>
      </div>
    );

  return (
    <div className="flex flex-col relative">
      <div className="text-white p-2 absolute drop-shadow-xl hover:-translate-x-0.5 shadow-white transition ease-in-out delay-150">
        <button onClick={() => setSelectId(0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-8 w-8 fill-slate-800 bg-white rounded-full p-1"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
      </div>
      <div className="flex gap-4 p-4 text-white">
        <img src={data.image} alt={data.title} className="h-48 w-36 border-2" />
        <div className="flex flex-col gap-2">
          <div className="text-lg">{data.title}</div>
          <div className="text-base">{data.authors}</div>
          <div className="text-sm text-white">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td>Publisher</td>
                  <td>{data.publisher}</td>
                </tr>
                <tr>
                  <td>Pages</td>
                  <td>{data.pages}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{data.year}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="p-4 text-white">{data.description}</div>
      <div className="text-white bg-section-200 my-2 mx-6 py-3 px-4 rounded-md flex flex-col items-center">
        <Rating size={28}  onSetRating={setUserRating}/>
        {userRating &&(<button className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white text-center"
                            onClick={()=>addWatch(data)}>+ Add to List</button>)}

        <div className="p-4 text-white flex justify-center gap-4">
          <a
            href={data.download}
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white"
          >
            Download
          </a>
          <a
            href={`${data.url}pdf`}
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white text-center"
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
