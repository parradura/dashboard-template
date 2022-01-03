export default function Avatar({src}) {
  return (
    <div className="bg-primary-500 p-1 rounded-full">
      {
        src 
          ? <img src={src} alt="" className="h-14 rounded-full"/>
          : <div className="h-14 w-14 rounded-full bg-slate-300"/>
      }
      
    </div>
  )
}