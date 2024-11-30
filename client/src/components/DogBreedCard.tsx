import { DogBreed } from "@/types/api";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DogBreedCardProps {
  breed: DogBreed;
}

export const DogBreedCard = ({ breed }: DogBreedCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {breed.imageUrl && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={breed.imageUrl as string}
            alt={breed.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-800">{breed.name}</h2>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center">
          <span className="text-gray-600 font-medium w-32">Size:</span>
          <span className="text-gray-800 capitalize">{breed.size}</span>
        </div>

        <div className="flex items-center">
          <span className="text-gray-600 font-medium w-32">Life Span:</span>
          <span className="text-gray-800">
            {breed.lifeExpectancy.min}-{breed.lifeExpectancy.max} years
          </span>
        </div>

        <div>
          <span className="text-gray-600 font-medium block mb-2">
            Temperament:
          </span>
          <div className="flex flex-wrap gap-2">
            {breed.temperament.map((trait) => (
              <span
                key={trait}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium
                         hover:bg-blue-100 transition-colors duration-200"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
