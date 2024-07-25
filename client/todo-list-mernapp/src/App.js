import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('')
  const [updateItemText, setUpdateItemText] = useState('');

  //adds new item to database
  const addItem = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post('https://task-goal-d2bfd123f229.herokuapp.com/api/item', {item: itemText})
      setListItems(prev => [...prev, res.data]);
      setItemText('');
    }catch(err){
      console.log(err);
    }
  }

//fetch all todo items from database -- useEffect hook
useEffect(()=>{
  const getItemsList = async () => {
    try{
      const res = await axios.get('https://task-goal-d2bfd123f229.herokuapp.com/api/items')
      setListItems(res.data)
      console.log('render')
    }catch(err){
      console.log(err);
    }
  }
  getItemsList()
},[]);

//deletes item when click on remove
const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`https://task-goal-d2bfd123f229.herokuapp.com/api/item/${id}`)
    const newListItems = listItems.filter(item=> item._id !== id);
    setListItems(newListItems);
  }catch(err){
    console.log(err);
  }
}

//updates/edits item
const updateItem = async (e) => {
  e.preventDefault()
  try{
    const res = await axios.put(`https://task-goal-d2bfd123f229.herokuapp.com/api/item/${isUpdating}`, {item: updateItemText})
    console.log(res.data)
    const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
    const updateItem = listItems[updatedItemIndex].item = updateItemText;
    setUpdateItemText('');
    setIsUpdating('');
  }catch(err){
    console.log(err);
  }
}
//need to show input field by updated/edited item
const renderUpdateForm = () =>(
  <form className="update-form" onSubmit={(e)=>{updateItem(e)}} >
    <input className="update-new-input" type="text" placeholder="New Task or Goal" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText}/>
    <button className="update-new-btn" type="submit">Edit</button>
  </form>
)

  return (
    <div className="App">
      <h1>Task/Goal List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='Add Task or Goal' onChange={e => {setItemText(e.target.value)} } value={itemText} />
        <button type="submit">Add</button>
      </form>
      <div className="todo-listItems">
        {
          listItems.map(item => (
          <div className="todo-item">
            {
              isUpdating === item._id
              ? renderUpdateForm()
              : <>
                  <p className="item-content">{item.item}</p>
                  <button className="update-item" onClick={()=>{setIsUpdating(item._id)}}>Edit</button>
                  <button className="delete-item" onClick={()=>{deleteItem(item._id)}}>Remove</button>
                </>
            }
          </div>
          ))
        }



      </div>
    </div>
  );
}

export default App;
