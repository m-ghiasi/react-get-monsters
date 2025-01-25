export default function Card(props){
    return(
      <div className="flex">
      <div  key={props.data.id} className=" bg-stone-400 rounded p-2 ">
        <img src={`https://robohash.org/${props.index}?set=set2&size=290x290`} alt="" className="w-16 h-16" />
        <p>{props.data.id}</p>
        <p>{props.data.name}</p>
        <p>{props.data.username}</p>
      </div>
    </div>
    )

}