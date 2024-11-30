import { z } from "zod";
import { schemas } from "@schema/zod-schema";

export type DogSize = z.infer<typeof schemas.DogSize>;
export type LifeExpectancy = z.infer<typeof schemas.LifeExpectancy>;
export type DogBreed = z.infer<typeof schemas.DogBreed>;
export type DogBreedsResponse = z.infer<typeof schemas.DogBreedsResponse>;
