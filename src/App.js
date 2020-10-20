import React, { useState } from "react";
import "./styles.css";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

export default function App() {
  const [search, setSearch] = useState("");
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setText([
      ...text,
      { text: search, completed: false, id: Math.random() * 1000 }
    ]);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="main">
        <PlaylistAddCheckIcon />
        <h2>Todo List </h2>
      </div>
      <input
        type="text"
        placeholder="Todo List"
        value={search}
        className="bar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button className="btn" onClick={submitHandler}>
        Add
      </button>
      <ul>
        {text.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}
