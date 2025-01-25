import { Prisma } from "@prisma/client";
import { ConvertDecimalToNumber } from "./decimal-to-number";

export type ProductItemType = ConvertDecimalToNumber<
  Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>
>;
