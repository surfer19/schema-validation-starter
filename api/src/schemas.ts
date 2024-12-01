import { z } from "zod";

export const DogSize = z.enum(["small", "medium", "large"]);
export type DogSize = z.infer<typeof DogSize>;

export const LifeExpectancy = z.object({
  min: z.number(),
  max: z.number(),
});

export const DogBreed = z.object({
  id: z.number(),
  name: z.string(), //.optional(),
  size: DogSize,
  temperament: z.array(z.string()),
  lifeExpectancy: LifeExpectancy,
  imageUrl: z.string(),
});

export const DogBreedsResponse = z.object({
  breeds: z.array(DogBreed),
});
