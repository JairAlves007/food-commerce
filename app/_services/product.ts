import { db } from "../_lib/prisma";
import { ProductItemType } from "../_types/product-item";
import { SerializedProduct } from "../_types/serialized-product";

export const getLimitedProductsWithDiscount = async (
  take: number,
): Promise<ProductItemType[]> => {
  return (
    await db.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
      take,
      include: {
        restaurant: {
          select: {
            name: true,
          },
        },
      },
      distinct: ["imageUrl"],
    })
  ).map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};

export const getProductById = async (
  id: string,
): Promise<SerializedProduct | null> => {
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

  if (!product) return null;

  return {
    ...product,
    price: Number(product.price),
    restaurant: {
      ...product.restaurant,
      deliveryFee: Number(product.restaurant.deliveryFee),
    },
    hasDiscount: product.discountPercentage > 0,
  };
};

export const getComplementaryProducts = async (
  product: SerializedProduct,
): Promise<ProductItemType[]> => {
  return (
    await db.product.findMany({
      where: {
        id: {
          not: product.id,
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
};
