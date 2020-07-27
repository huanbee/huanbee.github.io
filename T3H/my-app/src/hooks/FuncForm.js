import React,{ useState } from "react";
import { useEffect } from "react";



export default function FuncForm() {
  const [name, setName] = useState("");
  const inputChange = (event) => {
    setName(event.target.value);
  };

useEffect(()=>{
    document.title = name;
    //[] " điều kiện"
},[])

  return (
    <div>
      <label>Name: {name}</label> <br />
      <input
        type="text"
        name="name"
        id=""
        className="input-rounded"
        value={name}
        onChange={inputChange}
      />
    </div>
  );
}

