import { DogBreedCard } from "@/components/DogBreedCard";
import { trpc } from "@/services/trpc";

export function DogBreedsPage() {
  const { data, isLoading, error } = trpc.v1.breeds.getBreeds.useQuery(
    undefined,
    {
      retry: 1,
      onError: (error) => {
        console.error("Failed to fetch breeds:", error);
      },
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading dog breeds...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">
          Error: {error.message || "Failed to fetch dog breeds"}
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 my-12">
      <h1 className="text-5xl font-bold mb-8">Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.breeds.map((breed) => (
          <DogBreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
