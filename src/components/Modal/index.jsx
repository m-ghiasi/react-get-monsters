export default function Modal(props) {
  return (
  
    <div  className=" fixed left-0 top-0 bottom-0 right-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[600px] h-[600px] bg-slate-500 ">
      {props.children}
    </div>
    </div>
  );
}
