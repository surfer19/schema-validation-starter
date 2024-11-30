import { useQuery } from "@tanstack/react-query";
import { DogBreedCard } from "@/components/DogBreedCard";
import type { DogBreedsResponse } from "@/types/api";

export function DogBreedsPage() {
  const { data, isLoading, error } = useQuery<DogBreedsResponse>({
    queryKey: ["breeds"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/v1/breeds");
      if (!response.ok) {
        throw new Error("Failed to fetch breeds");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 my-12">
      <h1 className="text-5xl font-bold mb-8">Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.breeds.map((breed) => (
          <DogBreedCard key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
