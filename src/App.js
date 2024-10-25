import { useState } from "react";
import Logo from "./logo.js";
import Form from "./form.js";
import PackingList  from "./packedlist.js";
import Stats from "./stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true},
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items,setItems]=useState([])
  // const [items,setItems]=useState(initialItems) //this will gives error as in the packlist we iterate on the items array
  

  function handleAddItems(item){
    setItems((items)=> [...items,item])
  }

  function handleDeleteItem(id){
    // console.log(id)
    setItems(
      (items)=> items.filter( (item)=> item.id !== id)
    )
  }

  function handleToggleItem(id){
    // console.log("hello")
setItems((items)=>items.map((item)=>item.id === id ? {...item,packed:!item.packed} :item )) //her  we are updating by creating new object with updated packed value
  }

  function handleClearList(){
    // set items as empty array

    const confirmed=window.confirm('are you sure you wan tot deletel all item?')
    if (confirmed) setItems([])
  }

  return (
    <div className="app">
    <Logo/>
    <Form onhandleItem={handleAddItems}/>
    <PackingList  items={items}
     onDeleteItem={handleDeleteItem} 
     ontoggleItem={handleToggleItem}
     onClearList={handleClearList}/>
    <Stats items={items}/>
    </div>
  )

}


////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////

////////////////////////////////////////////////////////

export default App;
