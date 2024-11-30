import { z } from "zod";

export const DogSize = z.enum(["small", "medium", "large"]);

export const LifeExpectancy = z
  .object({ min: z.number().int(), max: z.number().int() })
  .strict()
  .passthrough();

export const DogBreed = z
  .object({
    id: z.number().int(),
    name: z.string(),
    size: DogSize,
    temperament: z.array(z.string()),
    lifeExpectancy: LifeExpectancy,
    imageUrl: z.string(),
  })
  .strict()
  .passthrough();

export const DogBreedsResponse = z
  .object({ breeds: z.array(DogBreed) })
  .strict()
  .passthrough();

export const schemas = {
  DogSize,
  LifeExpectancy,
  DogBreed,
  DogBreedsResponse,
};

[
  {
    method: "get",
    path: "/v1/breeds",
    alias: "get_breeds_v1_breeds_get",
    description: `Returns a list of dog breeds with their characteristics`,
    requestFormat: "json",
    response: DogBreedsResponse,
  },
];
