import { ProductItemType } from "../_types/product-item";
import { SerializedProduct } from "../_types/serialized-product";

export interface ProductDetailsProps {
  product: SerializedProduct;
  complementaryProducts: ProductItemType[];
}
