import { useState } from "react";
import Winnie from "./images/winnie-style.jpg";
import Pot from "./images/winnie-pot.png";

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
    <div className="main-container flex">
      <div className="left-side flex flex-col bg-pink-800 justify-center items-center p-12 w-3/4 min-h-screen">
        <h1 className="text-4xl mb-24 text-white font-italic">
          “Any day spent with you is my favorite day.”{" "}
          <span className="text-2xl italic">- Winnie the Pooh</span>
        </h1>
        <div className="form-container flex flex-col border-2 bg-white rounded-xl px-24 py-12 w-82 drop-shadow-xl">
          <div className="flex justify-center mb-4">
            <h3 className="text-xl font-bold text-center mt-4 mr-2 text-blue-800">
              Your details
            </h3>
            <img
              src={Pot}
              className="w-8 h-10 ml-1 mb-2"
              alt="winnie pooh pot"
            />
          </div>
          <input
            className="border-2 border-blue-800 rounded-md p-2 mt-4 placeholder:text-sm"
            type="email"
            name="email"
            value={data.email}
            placeholder="email"
            onChange={handleInput}
          />
          <input
            className="border-2 border-blue-800 rounded-md p-2 mt-4 placeholder:text-sm"
            type="password"
            name="password"
            value={data.password}
            placeholder="password"
            onChange={handleInput}
          />
          <div className="text-center">
            <button
              className="my-8 border-2 border-blue-800 bg-violet-300 font-bold text-blue-800 hover:text-blue-900 hover:bg-violet-400 p-2 w-full rounded-md"
              type="submit"
              onClick={submit}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
      <div className="right-side w-1/2 bg-purple-300 min-h-full">
        <img src={Winnie} className="min-h-full" alt="right-side winnie pic" />
      </div>
    </div>
  );
}

export default App;
