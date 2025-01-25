export const calculateProductTotalPrice = (
  price: number,
  discountPercentage: number,
): number => {
  if (discountPercentage === 0) return price;

  const discount = price * (discountPercentage / 100);

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
