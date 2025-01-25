import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import { SerializedProduct } from "@/app/_types/serialized-product";
import ProductDetails from "./_components/product-details";
import { ProductPageProps } from "@/app/_interfaces/product-page";

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!product) return notFound();

  const complementaryProducts = (
    await db.product.findMany({
      where: {
        id: {
          not: id,
        },
        restaurantId: product.restaurantId,
        category: {
          id: product.categoryId,
        },
      },
      take: 10,
      include: {
        restaurant: {
          select: {
            name: true,
          },
        },
      },
      distinct: ["imageUrl"],
    })
  ).map((product) => {
    return {
      ...product,
      price: Number(product.price),
    };
  });

  const serializedProduct: SerializedProduct = {
    ...product,
    price: Number(product.price),
    restaurant: {
      ...product.restaurant,
      deliveryFee: Number(product.restaurant.deliveryFee),
    },
    hasDiscount: product.discountPercentage > 0,
  };

  return (
    <div>
      <ProductImage product={serializedProduct} />

      <ProductDetails
        product={serializedProduct}
        complementaryProducts={complementaryProducts}
      />
    </div>
  );
};

export default ProductPage;
