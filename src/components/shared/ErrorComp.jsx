export default function ErrorComp({ err }) {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-red-800 text-white rounded-md p-6 shadow-lg max-w-md w-full text-center animate-fade-in m-2">
        <h3 className="text-xl font-bold mb-2">{err}</h3>
      </div>
    </div>
  );
}
