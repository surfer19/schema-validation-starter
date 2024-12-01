import {
  DogSize as DogSizeSchema,
  LifeExpectancy,
  DogBreed,
  DogBreedsResponse,
} from "@api/schemas";
import { z } from "zod";

export type DogSize = z.infer<typeof DogSizeSchema>;
export type LifeExpectancy = z.infer<typeof LifeExpectancy>;
export type DogBreed = z.infer<typeof DogBreed>;
export type DogBreedsResponse = z.infer<typeof DogBreedsResponse>;
