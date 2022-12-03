import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("Waslead");

  const handlName = () => {
    setName("Jamiu");
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={handleName}>Click me to change</button>
      <h1>Home Page</h1>
    </>
  );
}

export default Home;
