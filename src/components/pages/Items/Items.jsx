import React, { useEffect, useState } from 'react'

export default function Items() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    async function fetchItemsData() {
      try {
        const response = await fetch("https://mhw-db.com/items");
        const data = await response.json();
        setItems(data)
        console.log({items});
        
      } catch (error) {
        console.error("error:", error);
      }
    }
    fetchItemsData()
  },[])

  return (
    <div>
      {items.map(item=>(
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}
