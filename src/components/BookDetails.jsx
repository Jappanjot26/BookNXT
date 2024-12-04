import { useEffect, useState } from "react";
import Loading from "./Loading";

function BookDetails({ id }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(`https://www.dbooks.org/api/book/${id}`);
      console.log(res);
      if (!res.ok) {
        setIsLoading(false);
        setData(null);
        return;
      }
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }

    if (id === 0) return;
    fetchData();
  }, [id]);

  if (isLoading) return <Loading />;
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
        <button>
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
        <img src={data.image} alt={data.title} className="h-48 w-48 border-2" />
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

      <div className="p-4 text-white flex justify-center">
        <a
          href={data.download}
          target="_blank"
          rel="noreferrer"
          className="text-slate-900 border-2 border-white py-2 px-6 rounded-lg hover:bg-grey-200 bg-white hover:-translate-y-0.5 drop-shadow-xl transition ease-in-out delay-150 shadow-white"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default BookDetails;
