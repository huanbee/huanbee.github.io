import React, { useState } from "react";
import { useEffect } from "react";

export default function FuncForm() {
  const [name, setName] = useState("");
  const [suname, setSuName] = useState("");

  const inputChange = (event) => {
    setName(event.target.value);
  };
  const suInputChange = (event) => {
    setSuName(event.target.value);
  };

  useEffect(() => {
    console.log("Name: ", name);
    document.title = name + " " + suname;
    //[] " điều kiện"
  }, [name, suname]);

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
      <hr />
      <label>suName: {suname}</label> <br />
      <input
        type="text"
        name="suname"
        id=""
        className="input-rounded"
        value={suname}
        onChange={suInputChange}
      />
    </div>
  );
}
