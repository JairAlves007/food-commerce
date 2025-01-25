import { ProductsListProps } from "../_types/product-list";
import ProductItem from "./product-item";

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
