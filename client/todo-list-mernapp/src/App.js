
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Add Checklist Item' />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p>this is item 1</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
        <div className="todo-item">
          <p>this is item 2</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
        <div className="todo-item">
          <p>this is item 3</p>
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
