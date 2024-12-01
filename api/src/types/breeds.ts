import { z } from "zod";
import { DogBreed } from "../schemas";

export type DogBreed = z.infer<typeof DogBreed>;
