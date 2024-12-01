import { trpc } from "@/services/trpc";

export function DogBreeds() {
  const { data, isLoading } = trpc.v1.breeds.getBreeds.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.breeds.map((breed) => (
        <div key={breed.id}>{breed.name}</div>
      ))}
    </div>
  );
}
