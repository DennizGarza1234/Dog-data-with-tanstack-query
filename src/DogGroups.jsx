import { useQuery } from "@tanstack/react-query";

const fetchGroups = async () => {
  const res = await fetch("https://dogapi.dog/api/v2/groups");
  if (!res.ok) throw new Error("Failed to fetch groups");
  return res.json();
};

export default function DogGroups() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["groups"],
    queryFn: fetchGroups,
  });

  return (
    <div>
      <h2>Dog Groups</h2>

      {isPending && <p>Loading groups...</p>}
      {isError && <p>Failed to load groups</p>}

      {data && (
        <ul>
          {data.data.map((group) => (
            <li key={group.id}>
              {group.attributes.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
