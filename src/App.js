
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
    setContent("");
  }
  return (
    <div className="App">
      <h3>todos</h3>
      <form onSubmit={submit}>
        <input
          value={content}
          onChange={onChange}
        />
        <button>submit</button>
      </form>
      
      {todos.map((value)=>
        {
          return <li>{value}</li> 
        }
      )}
    </div>
    
  );
}

export default App;
