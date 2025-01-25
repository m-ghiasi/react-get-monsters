import { useEffect, useState } from "react";
import Card from "../Crard";

export default function Getmonster() {
  const [monesters, setMonesters] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setMonesters(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {monesters.map((monester, index) => (
        <Card data={monester} index={index} key={index} />
      ))}
    </div>
  );
}
