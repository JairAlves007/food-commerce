import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { UtensilsIcon } from "lucide-react";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { ProductItemProps } from "../_interfaces/product-item";

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link className="w-[150px] min-w-[150px]" href={`/product/${product.id}`}>
      <div className="w-full min-w-full space-y-2 hover:cursor-pointer">
        <div className="relative h-[150px] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge
              product={product}
              className="absolute left-2 top-2 px-2 py-[2px]"
            />
          )}
        </div>

        <div>
          <h2 className="truncate text-sm">{product.name}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">
              {formatCurrency(
                calculateProductTotalPrice(
                  product.price,
                  product.discountPercentage,
                ),
              )}
            </h3>

            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(product.price))}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <UtensilsIcon size={16} />

            <span className="block truncate text-xs">
              {product.restaurant.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
