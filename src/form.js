
import { useState } from "react";
export default function Form({onhandleItem}){
  
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