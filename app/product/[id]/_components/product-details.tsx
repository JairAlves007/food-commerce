"use client";

import DiscountBadge from "@/app/_components/discount-badge";
import ProductsList from "@/app/_components/products-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { ProductDetailsProps } from "@/app/_interfaces/product-details";
import {
  BikeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () =>
    setQuantity((currentQuantity) => currentQuantity + 1);
  const handleDecreaseQuantity = () =>
    setQuantity((currentQuantity) => {
      if (currentQuantity <= 1) return 1;

      return currentQuantity - 1;
    });

  return (
    <div className="relative z-50 -mt-3 rounded-tl-lg rounded-tr-lg bg-background">
      <div className="p-5">
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full"
            />
          </div>

          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>

        <h1 className="mb-2 mt-1 text-xl font-semibold">{product.name}</h1>

        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {formatCurrency(
                  calculateProductTotalPrice(
                    product.price,
                    product.discountPercentage,
                  ),
                )}
              </h2>

              {product.hasDiscount && <DiscountBadge product={product} />}
            </div>

            {product.hasDiscount && (
              <p className="text-sm text-muted-foreground">
                De: {formatCurrency(product.price)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 text-center">
            <Button
              size="icon"
              variant="ghost"
              className="border border-solid border-muted-foreground"
              onClick={handleDecreaseQuantity}
            >
              <ChevronLeftIcon />
            </Button>

            <span className="w-4">{quantity}</span>

            <Button size="icon" onClick={handleIncreaseQuantity}>
              <ChevronRightIcon />
            </Button>
          </div>
        </div>

        <Card className="mt-6 flex justify-around border-none bg-transparent py-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span>Entrega</span>
              <BikeIcon size={14} />
            </div>

            <p className="text-xs font-semibold">
              {product.restaurant.deliveryFee <= 0
                ? "Gratis"
                : formatCurrency(product.restaurant.deliveryFee)}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-muted-foreground">
              <span>Entrega</span>
              <TimerIcon size={14} />
            </div>

            <p className="text-xs font-semibold">
              {product.restaurant.deliveryTimeMinutes} min.
            </p>
          </div>
        </Card>

        <div className="mt-6 space-y-3">
          <h3 className="font-semibold">Sobre</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
      </div>

      <div className="space-y-3 pl-5">
        <h3 className="text-capitalize font-semibold">
          Mais {product.category.name}
        </h3>
        <ProductsList products={complementaryProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
