import React, { useEffect, useState } from "react";
import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 10_000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className={styles.notFound}>
      <img
        src="https://cdn.dribbble.com/users/2272148/screenshots/6633933/daily008.gif"
        alt=""
      />
      <p>..redirect in {counter}s</p>
    </div>
  );
}

// gif testen via lokales einbinden
