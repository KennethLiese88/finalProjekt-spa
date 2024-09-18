import React, { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItemsData() {
      try {
        const response = await fetch("https://mhw-db.com/items");
        const data = await response.json();
        setItems(data);
        console.log({ items });
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItemsData();
  }, []);

  return (
    <>
      {isLoading ? (<p>Loading...</p>) : (
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
