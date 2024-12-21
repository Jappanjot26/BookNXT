import React from "react"
import Rating from "../shared/Rating"
import RateAndComment from "../ui/RateAndComment"
export default function SavedComp({watched,testPass})
{
    return(<>
        <div className="flex flex-col relative">
        <div className="text-white p-2 absolute drop-shadow-xl hover:-translate-x-0.5 shadow-white transition ease-in-out delay-150">
          <button > 
          {/* onClick={() => setSelectId(0)} */}
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
            src={testPass.image}
            alt={testPass.title}
            className="lg:h-48 lg:w-36 md:h-40 md:w-32"
          />
          <div className="flex flex-col gap-2">
            <div className="text-lg">{testPass.title}</div>
            <div className="text-base">{testPass.authors}</div>
            <div className="text-sm text-white">
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td>Publisher</td>
                    <td>{testPass.publisher}</td>
                  </tr>
                  <tr>
                    <td>Pages</td>
                    <td>{testPass.pages}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>{testPass.year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="p-4 text-white">
          {testPass.description ? testPass.description.split(".")[0] + "." : ""}
        </div>
        <div className="text-white bg-section-200 my-2 mx-6 py-3 px-4 rounded-md flex flex-col items-center">
          <Rating
            size={28}
            // onClick={handleRatingClick}
            // onSetRating={setUserRating}
            defaultRating={1}
          />
          <RateAndComment
            // visible={showRNC}
            // onClose={setShowRNC}
            // onSetRating={setUserRating}
            // defaultRating={userRating}
            // defaultComment={userComment}
            // onSetComment={setComment}
            // submitRNC={submitRNC}
          />
          <div className="p-4 text-white flex justify-center gap-4">
            <a
              href={testPass.download}
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
              href={`${testPass.url}pdf`}
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
    )
}