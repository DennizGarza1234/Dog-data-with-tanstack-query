import { useQuery } from "@tanstack/react-query";
import BreedDetails from "./BreedDetails";
import DogFacts from "./DogFacts";
import DogGroups from "./DogGroups";
import { useState } from "react";

const fetchBreeds = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/breeds");
  if (!res.ok) throw new Error("Failed to fetch breeds");
  return res.json();
};

export default function App() {
  const [selectedBreedId, setSelectedBreedId] = useState(null);

  const {
    data,
    isPending,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

return (
  <div className="container">
    <h1>Dog Breeds</h1>

    {isPending && <p className="loading">Loading breeds...</p>}
    {isError && <p className="error">Error: {error.message}</p>}

    {isSuccess && (
      <div className="card">
        <ul className="list">
          {data.data.map((breed) => (
            <li
              key={breed.id}
              onClick={() => setSelectedBreedId(breed.id)}
            >
              {breed.attributes.name}
            </li>
          ))}
        </ul>
      </div>
    )}

    {selectedBreedId && (
      <div className="card">
        <BreedDetails breedId={selectedBreedId} />
      </div>
    )}

    <div className="card">
      <h2 className="section-title">Dog Facts</h2>
      <DogFacts />
    </div>

    <div className="card">
      <h2 className="section-title">Dog Groups</h2>
      <DogGroups />
    </div>
  </div>
);

}
