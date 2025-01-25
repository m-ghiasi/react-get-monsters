export default function Button({titel, onClick}){
    return(
        <button 
        className="w-24 p-3 rounded bg-orange-200 border border-red-950 "
        onClick={onClick}>{titel}</button>
    )
}