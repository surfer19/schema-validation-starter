import { dogBreeds } from "../data/breeds";
import type { DogBreed } from "../types/breeds";

export class DogBreedsRepository {
  private breeds = dogBreeds;

  async getAllBreeds(): Promise<DogBreed[]> {
    return this.breeds;
  }

  async searchBreeds(query: string): Promise<DogBreed[]> {
    return this.breeds.filter(
      (breed) =>
        breed.name.toLowerCase().includes(query.toLowerCase()) ||
        breed.temperament.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );
  }
} 