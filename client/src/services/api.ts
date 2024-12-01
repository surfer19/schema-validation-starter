import { trpcClient } from "./trpc";
import type { RouterOutputs } from "@api/types/router";

export type DogBreedsResponse = RouterOutputs["v1"]["breeds"]["getBreeds"];

export const dogApi = {
  getBreeds: async (): Promise<DogBreedsResponse> => {
    try {
      return await trpcClient.v1.breeds.getBreeds.query();
    } catch (error) {
      console.error("Failed to fetch dog breeds:", error);
      throw error;
    }
  },
};
