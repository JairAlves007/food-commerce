import { Product } from "@prisma/client";

export interface DiscountBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  product: Pick<Product, "discountPercentage">;
}
