import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";
import { ProductPageProps } from "@/app/_interfaces/product-page";
import {
  getComplementaryProducts,
  getProductById,
} from "@/app/_services/product";

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) return notFound();

  const complementaryProducts = await getComplementaryProducts(product);

  return (
    <div>
      <ProductImage product={product} />

      <ProductDetails
        product={product}
        complementaryProducts={complementaryProducts}
      />
    </div>
  );
};

export default ProductPage;
