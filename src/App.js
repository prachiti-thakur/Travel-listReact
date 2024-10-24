import { useState } from "react";

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
  return (
    <div className="app">
    <Logo/>
    <Form onhandleItem={handleAddItems}/>
    <PackingList items={items} onDeleteItem={handleDeleteItem} ontoggleItem={handleToggleItem}/>
    <Stats/>
    </div>
  )

}
function  Logo(){
 return <h1> 🌴 Far Away 👜 </h1>
}
function Form({onhandleItem}){
  
  const [description,setDescription]=useState("")
  const [quantity,setQuantity]=useState(5);
   
  function handleSubmit(e){
    e.preventDefault()
if (!description)return; //when no description then not create the newItem

    const newItem={description,quantity,packed:false,id:Date.now()}

// after adding item add it to the items array
onhandleItem(newItem)

    console.log(newItem)
     setDescription("")
     setQuantity(1)
  }

 return (
  <form className="add-form" onSubmit={handleSubmit}>
   <h3>What do you need for Trip ? f</h3>
   <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>{/*here value is comming from option value={num}*/} 
   {
    Array.from( { length:20}, (_,i)=> i+1).map(
      (num)=>(
        <option value={num} key={num}>
          {num}
        </option>
      )
    )
   }
   </select>
   <input type="text" placeholder="item.." value={description} onChange={(e)=>setDescription(e.target.value)}/>
   <button  
   >Add</button>
 </form>
 )
}
////////////////////////////////////////////////////////////////////
function PackingList({items,onDeleteItem,ontoggleItem}){
 return (

  <div  className="list">
    <ul>
  {/* render list initial have */}

  {
    items.map(item=> <Item item= {item} key={item.id}  onDeleteItem={onDeleteItem} ontoggleItem={ontoggleItem}/>)
  }
  </ul>

  </div>
  
 )
}

/////////////////////////////////////////////////
function Stats(){
  return (
    <footer className="stats">
      <em>
      You have x items on your list and you already packed x (x %)
      </em>
    </footer>
  )
}
////////////////////////////////////////////////////////
// destructure the array
function Item({item,onDeleteItem,ontoggleItem}){
 return (
  <li>
    <input type="checkbox" value={item.packed} onChange={
      ()=>ontoggleItem(item.id)}/>

    <span style={item.packed? {textDecoration:"line-through"}:{}}> 
      {item.quantity}
      {item.description}
      </span>

      <button onClick={()=>onDeleteItem(item.id)}>❌ </button>
    
  </li>
 )
}
export default App;
