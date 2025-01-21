import { Product } from "@prisma/client";

export const calculateProductTotalPrice = (product: Product): number => {
  const price = Number(product.price);

  if (product.discountPercentage === 0) return price;

  const discount = price * (product.discountPercentage / 100);

  return price - discount;
};

export const formatCurrency = (price: number): string => {
  return (
    "R$" +
    Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price)
  );
};
