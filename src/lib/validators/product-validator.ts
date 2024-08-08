import { z } from "zod";

export const AVALABLE_SIZES = ["S", "M", "L"] as const;
export const AVALABLE_SORT = ["none", "price-asc", "price-desc"] as const;
export const AVALABLE_COLORS = [
  "white",
  "blue",
  "beige",
  "green",
  "purple",
] as const;

export const ProductFilterValidator = z.object({
  size: z.array(z.enum(AVALABLE_SIZES)),
  color: z.array(z.enum(AVALABLE_COLORS)),
  sort: z.enum(AVALABLE_SORT),
  price: z.tuple([z.number(), z.number()]),
});

export type ProductState = Omit<
  z.infer<typeof ProductFilterValidator>,
  "price"
> & {
  price: { isCustom: boolean; range: [number, number] };
};
