import { useQuery } from "@tanstack/react-query";

const fetchFacts = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/facts");
  if (!res.ok) throw new Error("Failed to fetch facts");
  return res.json();
};

export default function DogFacts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["facts"],
    queryFn: fetchFacts,
  });

  return (
    <div>
      <h2>Dog Facts</h2>

      {isPending && <p>Loading facts...</p>}
      {isError && <p>Failed to load facts</p>}

      {data && (
        <ul>
          {data.data.map((fact) => (
            <li key={fact.id}>{fact.attributes.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
