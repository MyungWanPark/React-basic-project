import { useState } from "react";

function App() {
  const [todo, setToDo] = useState("");
  const [todos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setToDos((currentArray) => [todo, ...currentArray]);
    setToDo("");
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My todos ({todos.length})</h1>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="write a todos"
        />
        <button>Add todo</button>
      </form>
    </div>
  );
}

export default App;
