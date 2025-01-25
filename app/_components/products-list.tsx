import { ProductsListProps } from "../_interfaces/products-list";
import ProductItem from "./product-item";

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll pr-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
