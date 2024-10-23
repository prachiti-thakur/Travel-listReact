import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true},
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
    </div>
  )

}
function  Logo(){
 return <h1> 🌴 Far Away 👜 </h1>
}
function Form(){
  
  const [description,setDescription]=useState("")
  const [quantity,setQuantity]=useState(5);
   
  function handleSubmit(e){
    e.preventDefault()


  }

 return (
  <form className="add-form" onSubmit={handleSubmit}>
   <h3>What do you need for Trip ? f</h3>
   <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>{/*here value is comming from option value={num}*/} 
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

function PackingList(){
 return (

  <div  className="list">
    <ul>
  {/* render list initial have */}

  {
    initialItems.map(item=> <Item item= {item} key={item.id}/>)
  }
  </ul>

  </div>
  
 )
}
function Stats(){
  return (
    <footer className="stats">
      <em>
      You have x items on your list and you already packed x (x %)
      </em>
    </footer>
  )
}

// destructure the array
function Item({item}){
 return (
  <li>
    <span style={item.packed? {textDecoration:"line-through"}:{}}> 
      {item.quantity}
      {item.description}
      </span>

      <button >❌ </button>
    
  </li>
 )
}
export default App;
