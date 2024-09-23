import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";
import styles from "./Items.module.css";

export default function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const itemRefs = useRef([]);

  useEffect(() => {
    async function fetchItemsData() {
      try {
        const response = await fetch("https://mhw-db.com/items");
        const data = await response.json();
        setItems(data);
        console.log({data});
      } catch (error) {
        console.error("error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchItemsData();
  }, []);

  function handleSearch() {
    const index = items.findIndex(
      (item) => item.name.toLowerCase() === searchItem.toLowerCase()
    );
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: "smooth" });
      itemRefs.current[index].focus();
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <>
      <div className={styles.searchbar}>
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p className={styles.isLoading}><i className="fa-solid fa-gear fa-spin"></i> Loading...</p>
      ) : (
        <div className={styles.itemsContainer}>
          {items.map((item, index) => (
            <div
              key={item.id}
              tabIndex={0}
              ref={(div) => (itemRefs.current[index] = div)}
            >
              <ItemCard item={item} />
            </div>
          ))}
          <div className={styles.backTop}>
            <i className="fa-solid fa-stop"></i>
            <a href="#top"><i className="fa-solid fa-angles-up"></i></a>
            <i className="fa-solid fa-stop"></i>
          </div>
        </div>
      )}
    </>
  );
}

// items brauchen noch jeweils ihre icons