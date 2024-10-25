import { useState } from "react";
import Item from "./item";
export default function PackingList({items,onDeleteItem,ontoggleItem,onClearList}){
    const [sortby,setSortBy]=useState("input")
  
    let sortedItem;
    if (sortby === "input") sortedItem=items
  
    if (sortby ==="description") sortedItem=items.slice()
      .sort((a,b)=>a.description.localeCompare(b.description))
  
     if (sortby ==="packed") sortedItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
   return (
  
    <div  className="list">
      <ul>
    {/* render list initial have */}
  
    {
      sortedItem.map(item=> <Item item= {item} key={item.id}  onDeleteItem={onDeleteItem} ontoggleItem={ontoggleItem}/>)
    }
    </ul>
  
    {/* sorting list */}
  
    <div className="actions">
    <select value={sortby} onChange={(e)=>setSortBy(e.target.value)}>
      <option value="input">sort by the input order</option>
      <option value="description">sort by description </option>
      <option value="packed"> sort by packed status</option>
    </select>
    {/* clear list */}
  <button onClick={onClearList}>Clear List</button>
    </div>
  
     {/* sorting list */}
  
    </div>
    
   )
  }