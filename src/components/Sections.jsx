import BookDetails from "./BookDetails";
import BooksList from "./BooksList";
import Loading from "./Loading";
import { useState } from "react";
function Sections({ books, isLoading }) 
{
  const [selectId, setSelectId] = useState(1503212300)
  return (
    <div className="flex p-4 justify-center gap-6 h-full w-5/6 mt-5">
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] overflow-scroll rounded-md">
        {isLoading ? <Loading /> : <BooksList books={books}  setSelectId={setSelectId}/>}
      </div>
      <div className="bg-section-900 w-2/6 h-full max-h-[36rem] rounded-md">
        <BookDetails id={selectId} />
      </div>
    </div>
  );
}

export default Sections;
