import { router, publicProcedure } from "../trpc/init";
import { DogBreedsResponse } from "../schemas";
import type { Context } from "../trpc/context";

const getBreedsHandler = async ({ ctx }: { ctx: Context }) => {
  try {
    const breeds = await ctx.repository.getAllBreeds();
    return { breeds };
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Unknown error occurred"
    );
  }
};

export const breedsRouter = router({
  getBreeds: publicProcedure.output(DogBreedsResponse).query(getBreedsHandler),
});
