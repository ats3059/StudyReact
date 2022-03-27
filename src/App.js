
import {useState , useEffect} from 'react';

function App() {
  const [content,setContent] = useState("");
  const onChange = (event) => {
    setContent(event.target.value);
  }
  
  const [todos , setTodos] = useState([]);
  
  const submit = (event) => {
    event.preventDefault();
    setTodos(curArr => [content,...curArr]);
    console.log(todos);
  }
  return (
    <div className="App">
      <h3>todos</h3>
      <form onSubmit={submit}>
        <input
          value={content}
          onChange={onChange}
        />
      </form>
      <button>submit</button>
      <li>{todos.map((value)=>value)}</li>  
    </div>
    
  );
}

export default App;
