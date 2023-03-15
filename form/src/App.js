import { useState } from "react";

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
    <div>
      <h1>Add yourself to our users 👤</h1>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="name"
        onChange={handleInput}
      />
      <input
        type="email"
        name="email"
        value={data.email}
        placeholder="email"
        onChange={handleInput}
      />
      <input
        type="password"
        name="password"
        value={data.password}
        placeholder="password"
        onChange={handleInput}
      />
      <button type="submit" onClick={submit}>
        Submit
      </button>
      {data.name !== "" && (
        <div>
          <p>Hi {data.name}! 😃</p>
        </div>
      )}
      <div className="users-title-container">
        <h3>Users ⤵️ </h3>
        <ul>
          {nameList.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
