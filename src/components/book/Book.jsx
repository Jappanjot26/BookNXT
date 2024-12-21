function Book({ data, selectId, setSelectId, back}) {
  function handleClick(id) {

    if (id === selectId) 
    {
      setSelectId(0);
    } else {
      setSelectId(id);
      back()
    }
  }
  return (
    <div
      className="text-white mb-1 border-b-2 mx-3 border-translucent"
      onClick={() => handleClick(data.id)}
    >
      <div className="flex gap-4 p-4">
        <img src={data.image} alt={data.title} className="h-24 w-16 border-2" />
        <div className="flex flex-col gap-1">
          <div className="xl:text-xl lg:text-lg md:text-lg">
            {data.title.split(":")[0]}
          </div>
          <div className="xl:text-base text-gray-300 lg:text-md md:text-md">
            {data.authors.split(",")[0]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
