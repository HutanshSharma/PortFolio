import { createPortal } from "react-dom"

export default function({heading,description,ref}){
    return createPortal(
        <dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 m-auto rounded-md shadow-md">
            <h2 className="text-2xl border-b-1 border-slate-600">{heading}</h2>
            <p>{description}</p>
            <div className="mt-4 text-right border-0 focus:border-0">
                <button onClick={()=> ref.current.close()} className="text-white bg-red-400 px-4 hover:bg-red-600 py-2 rounded-md">Close</button>
            </div>
        </dialog>
        ,document.getElementById("modal")
    )
}