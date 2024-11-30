import axios from "axios";
import { schemas } from "@schema/zod-schema";
import type { DogBreedsResponse } from "@/types/api";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

export const dogApi = {
  getBreeds: async (): Promise<DogBreedsResponse> => {
    const { data } = await api.get("/v1/breeds");
    return schemas.DogBreedsResponse.parse(data);
  },
};
