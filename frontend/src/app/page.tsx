// frontend/app/page.tsx
import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Goバックエンドにリクエストを送る
    fetch("http://backend:8080")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data from backend:", error));
  }, []);

  return (
    <div>
      <h1>Message from Go Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
