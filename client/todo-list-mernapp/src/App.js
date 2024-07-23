import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);

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

//fetch all todo items from database -- useEffect hook
useEffect(()=>{
  const getItemsList = async () => {
    try{
      const res = await axios.get('http://localhost:5500/api/items')
      setListItems(res.data)
    }catch(err){
      console.log(err);
    }
  }
  getItemsList()
},[])


  return (
    <div className="App">
      <h1>Task Checklist</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Checklist Item' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {
          listItems.map(item => (
          <div className="todo-item">
            <p className="item-content">{item.item}</p>
            <button className="update-item">Edit</button>
            <button className="delete-item">Remove</button>
          </div>
          ))
        }



      </div>
    </div>
  );
}

export default App;
