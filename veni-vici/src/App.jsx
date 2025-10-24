import { useState } from "react";
import "./App.css"; 

export default function App() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCat() {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?include_breeds=true",
        {
          headers: {
            "x-api-key": import.meta.env.VITE_CAT_API_KEY,
          },
        }
      );

      const data = await res.json();
      const catData = data[0];

      if (!catData.breeds || catData.breeds.length === 0) {
        fetchCat();
        return;
      }

      const breed = catData.breeds[0];
      const attributes = [breed.name, breed.origin, breed.temperament];

      if (attributes.some((attr) => banList.includes(attr))) {
        fetchCat();
        return;
      }

      setCat({
        image: catData.url,
        name: breed.name,
        origin: breed.origin,
        temperament: breed.temperament,
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  function toggleBan(attr) {
    setBanList((prev) =>
      prev.includes(attr) ? prev.filter((a) => a !== attr) : [...prev, attr]
    );
  }

  return (
    <div className="app-container">
      <div className="card">
        <h1>Discover Cats 🐾</h1>

        <button onClick={fetchCat} disabled={loading}>
          {loading ? "Loading..." : "Discover"}
        </button>

        {cat && (
          <>
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <p>
              <strong>Breed:</strong>{" "}
              <span className="clickable" onClick={() => toggleBan(cat.name)}>
                {cat.name}
              </span>
            </p>
            <p>
              <strong>Origin:</strong>{" "}
              <span className="clickable" onClick={() => toggleBan(cat.origin)}>
                {cat.origin}
              </span>
            </p>
            <p>
              <strong>Temperament:</strong>{" "}
              <span
                className="clickable"
                onClick={() => toggleBan(cat.temperament)}
              >
                {cat.temperament}
              </span>
            </p>
          </>
        )}

        <h2>Ban List:</h2>
        <div className="ban-list">
          {banList.map((attr, index) => (
            <div key={index} className="ban-chip" onClick={() => toggleBan(attr)}>
              🔴 {attr}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
