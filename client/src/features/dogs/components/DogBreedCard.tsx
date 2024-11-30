import type { DogBreed } from "@/types/api";
import { cn } from "@/lib/utils";

const sizeColors = {
  small: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  large: "bg-red-100 text-red-800",
} as const;

interface DogBreedCardProps {
  breed: DogBreed;
}

export function DogBreedCard({ breed }: DogBreedCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {breed.imageUrl && (
        <div className="w-full h-48 relative">
          <img
            src={breed.imageUrl}
            alt={`${breed.name} dog breed`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{breed.name}</h3>

        <div className="mt-2">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              sizeColors[breed.size]
            )}
          >
            {breed.size}
          </span>
        </div>

        {breed.temperament && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Temperament</h4>
            <div className="mt-2 flex flex-wrap gap-1">
              {breed.temperament.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}

        {breed.lifeExpectancy &&
          breed.lifeExpectancy.min &&
          breed.lifeExpectancy.max && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-900">
                Life Expectancy
              </h4>
              <p className="mt-1 text-sm text-gray-500">
                {breed.lifeExpectancy.min} - {breed.lifeExpectancy.max} years
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
