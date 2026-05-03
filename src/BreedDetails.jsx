import { useQuery } from "@tanstack/react-query";

const fetchBreed = async (id) => {
  const res = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);
  if (!res.ok) throw new Error("Failed to fetch breed details");
  return res.json();
};

export default function BreedDetails({ breedId }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["breed", breedId],
    queryFn: () => fetchBreed(breedId),
    enabled: !!breedId,
  });

  if (isPending) return <p>Loading breed details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const breed = data.data;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{breed.attributes.name}</h2>
      <p>{breed.attributes.description || "No description available."}</p>

      <pre>{JSON.stringify(breed.attributes, null, 2)}</pre>
    </div>
  );
}
