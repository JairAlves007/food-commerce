import { Product } from "@prisma/client";

export interface ProductImageProps {
  product: Pick<Product, "name" | "imageUrl">;
}
