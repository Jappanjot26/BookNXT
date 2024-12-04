export default function({err})
{
   return  <div className="flex p-4 justify-center gap-6 h-full w-5/6 mt-5">
   <div className="bg-section-900 w-2/6 h-full max-h-[36rem] overflow-scroll rounded-md">
      <h3>{err}</h3>
   </div>
 </div>
}