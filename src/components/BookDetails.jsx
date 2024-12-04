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
    <div>
      <div className="flex gap-4 p-4 text-white">
        <img src={data.image} alt={data.title} className="h-48 w-48 border-2" />
        <div className="flex flex-col gap-1">
          <div className="text-xl">{data.title}</div>
          <div className="text-base">{data.authors}</div>
        </div>
      </div>
      <div className="p-4 text-white">{data.description}</div>
      <div className="p-4 text-white">
        Publisher: {data.publisher} <br />
        Pages: {data.pages} <br />
        Year: {data.year}
      </div>
      <div className="p-4 text-white flex justify-center">
        <a
          href={data.download}
          target="_blank"
          rel="noreferrer"
          className="text-slate-900 border-2 border-white p-2 rounded-lg hover:bg-grey-200 bg-white"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default BookDetails;
