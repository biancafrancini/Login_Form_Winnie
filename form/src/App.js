import { useState } from "react";

import "./index.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [nameList, setNameList] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });

    //console.log(data.email, data.password);
  };
  const submit = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });

    setNameList([...nameList, data.name]);
  };

  return (
    <div className="flex">
    <div className="flex flex-col bg-red-300 justify-center items-center p-12 w-1/2 h-screen">
      <h1 className="text-3xl mb-8">Login</h1>
      <div className="flex flex-col border-2 bg-white rounded-xl px-24 py-12 w-82">
        <input
        className="border-2 rounded-md p-2 mt-4"
        type="text"
        name="name"
        value={data.name}
        placeholder="name"
        onChange={handleInput}
      />
      <input
        className="border-2 rounded-md p-2 mt-4"
        type="email"
        name="email"
        value={data.email}
        placeholder="email"
        onChange={handleInput}
      />
      <input
        className="border-2 rounded-md p-2 mt-4"
        type="password"
        name="password"
        value={data.password}
        placeholder="password"
        onChange={handleInput}
      />
      <div className="text-center">
      <button className="my-8 border-2 p-2 w-fit rounded-md" type="submit" onClick={submit}>
        Log in
      </button>
      </div>
      </div>
      {data.name !== "" && (
        <div>
          <p>Hi {data.name}! 😃</p>
        </div>
      )}
      </div>
      
      {/*<div className="border-2 p-12">
      <div className="users-title-container">
        <h3>Users ⤵️ </h3>
        <ul>
          {nameList.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
          </div>

      </div>*/}
      <div className="w-1/2 bg-purple-300">
        <h2>CIAO</h2>
      </div>
      </div>
  );
}

export default App;
