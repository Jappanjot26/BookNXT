function Book({ data, selectId, setSelectId }) {
  function handleClick(id) {
    console.log("clicked " + id + " " + selectId);
    if (id === selectId) {
      setSelectId(0);
    } else {
      setSelectId(id);
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
          <div className="text-xl">{data.title}</div>
          <div className="text-base">{data.authors}</div>
        </div>
      </div>
    </div>
  );
}

export default Book;
