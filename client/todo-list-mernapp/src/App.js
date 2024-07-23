import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('')

  //adds new item to database
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:5500/api/item', {item: itemText})
      console.log(res);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="App">
      <h1>Task Checklist</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Checklist Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        <div className="todo-item">
          <p className="item-content">this is item 1</p>
          <button className="update-item">Edit</button>
          <button className="delete-item">Remove</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is item 2</p>
          <button className="update-item">Edit</button>
          <button className="delete-item">Remove</button>
        </div>
        <div className="todo-item">
          <p className="item-content">this is item 3</p>
          <button className="update-item">Edit</button>
          <button className="delete-item">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
