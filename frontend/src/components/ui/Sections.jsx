import { useEffect, useState } from "react";
import BookDetails from "../book/BookDetails";
import BooksList from "../book/BooksList";
import ErrorComp from "../shared/ErrorComp";
import Loading from "../shared/Loading";
import SavedComp from "../saved/SavedComp";

function Sections({ books, isLoading, error_message }) {
  const [selectId, setSelectId] = useState(0);
  const [watched, setWatched] = useState(null);
  const [singleSaveBook, setSingleSaveBook] = useState(null); // Initialize as null
  useEffect(() => {
    const saved = localStorage.getItem("saved");
    if (saved) {
      setWatched(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    async function saveData() {
      if (
        watched != null &&
        JSON.stringify(watched) !== localStorage.getItem("saved")
      ) {
        localStorage.setItem("saved", JSON.stringify(watched));
        const res = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL || "http://localhost:5174"
          }/auth/save`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: localStorage.getItem("loggedInUser"),
              saved: watched,
            }),
          }
        );
        const data = await res.json();
      }
    }
    saveData();
  }, [watched]);

  function testFub(id) {
    const match = watched.find((item) => item.id === id);
    setSingleSaveBook(match);
  }

  function reOpen(id) {
    testFub(id);
  }

  function back() {
    setSingleSaveBook(null);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("saved");
    window.location.reload();
  }

  return (
    <>
      <div className="flex p-4 justify-center gap-6 h-full xl:w-4/6 mt-5 md:w-full md:px-0 lg:px-20 xl:px-4 max-sm:flex-col max-sm:gap-2 max-sm:px-1">
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem]  overflow-scroll rounded-md scroll-m-3 md:w-full max-sm:max-h-48 ">
          {isLoading && <Loading />}
          {!error_message ? (
            <BooksList
              books={books}
              selectId={selectId}
              setSelectId={setSelectId}
              back={back}
            />
          ) : (
            <ErrorComp err={error_message}></ErrorComp>
          )}
        </div>
        <div className="bg-section-900 xl:w-full h-full max-h-[36rem] rounded-md md:w-full max-sm:w-full max-sm:max-h-[20rem] overflow-scroll relative">
          {singleSaveBook ? (
            <SavedComp
              watched={watched ? watched : []}
              setWatched={setWatched}
              singleSaveBook={singleSaveBook}
              back={back}
            ></SavedComp>
          ) : (
            <BookDetails
              id={selectId}
              setSelectId={setSelectId}
              reOpen={reOpen}
              watched={watched ? watched : []}
              setWatched={setWatched}
            />
          )}
          <div
            className="absolute bottom-2 right-4 bg-nav-700 rounded-full p-2  text-white hover:text-gray-200 transition duration-50"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              className="w-8 h-8 transition duration-150 cursor-pointer"
            >
              <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
