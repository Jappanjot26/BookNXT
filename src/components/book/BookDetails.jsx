import { useEffect, useState } from "react";
import Loading from "../shared/Loading";
import RateAndComment from "../ui/RateAndComment";
import Rating from "../shared/Rating";
import SavedList from "../saved/SavedList";
import ErrorComp from "../shared/ErrorComp";

function BookDetails({ id, setSelectId, reOpen, watched,  setWatched}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setComment] = useState("");
  const [finallRating, setFinallRating] = useState(0);
  const [finallPage, setPage] = useState(0);
  const [showRNC, setShowRNC] = useState(false);
  const duplicates = watched.filter((book) => book.id === data.id);

  function addWatch(data) {
    console.log(data)
    const newWatch = {
      authors:data.authors,
      publisher:data.publisher,
      year:data.year,
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      authors: data.authors,
      image: data.image,
      url: data.url,
      pages: data.pages,
      rating: Number(userRating),
      comment: userComment,
      description:data.description,
      
    };

    if (duplicates.length === 0) {
      setWatched((watched) => [...watched, newWatch]);
      setPage(Number(data.pages) + Number(finallPage));
      setFinallRating(Number(finallRating) + Number(userRating));
    }
    setSelectId(0);
  }
  function removeBook(id) {
    setFinallRating((r) => r - watched.find((book) => book.id === id).rating);
    setPage((p) => p - watched.find((book) => book.id === id).pages);
    setWatched((watched) => watched.filter((books) => books.id !== id));
  }

  function handleRatingClick() {
    setShowRNC(true);
  }
  function submitRNC() {
    if (duplicates.length === 0) addWatch(data);
    setShowRNC(false);
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
      setUserRating(0);
    }

    fetchData();
  }, [id]);

  if (isLoading) return <Loading />;
  if (!id || id === 0)
    return (
      <SavedList
        watched={watched}
        finallPage={finallPage}
        finallRating={finallRating}
        removeBook={removeBook}
        reOpen={reOpen}
      />
    );
  if (!data) return <ErrorComp err="Book not found" />;

  return (
    <>
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
          <img
            src={data.image}
            alt={data.title}
            className="lg:h-48 lg:w-36 md:h-40 md:w-32"
          />
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
        <div className="p-4 text-white">
          {data.description ? data.description.split(".")[0] + "." : ""}
        </div>
        <div className="text-white bg-section-200 my-2 mx-6 py-3 px-4 rounded-md flex flex-col items-center">
          <Rating
            size={28}
            onClick={handleRatingClick}
            onSetRating={setUserRating}
            defaultRating={userRating}
          />
          <RateAndComment
            visible={showRNC}
            onClose={setShowRNC}
            onSetRating={setUserRating}
            defaultRating={userRating}
            defaultComment={userComment}
            onSetComment={setComment}
            submitRNC={submitRNC}
          />
          <div className="p-4 text-white flex justify-center gap-4">
            <a
              href={data.download}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currenColor"
                viewBox="0 0 256 256"
                className="h-6 w-6 "
              >
                <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
              </svg>
            </a>
            <a
              href={`${data.url}pdf`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currenColor"
                viewBox="0 0 256 256"
                className="h-6 w-6 "
              >
                <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
