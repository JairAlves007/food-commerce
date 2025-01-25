import { Prisma } from "@prisma/client";
import { ConvertDecimalToNumber } from "./decimal-to-number";

export type SerializedProduct = ConvertDecimalToNumber<
  Prisma.ProductGetPayload<{
    include: { restaurant: true; category: { select: { name: true } } };
  }>
> & {
  hasDiscount: boolean;
};
