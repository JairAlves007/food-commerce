import { ArrowDownIcon } from "lucide-react";
import { DiscountBadgeProps } from "../_interfaces/discount-badge";

const DiscountBadge = ({
  product: { discountPercentage },
  className,
  ...rest
}: DiscountBadgeProps) => {
  return (
    <div
      className={`flex items-center gap-[2px] rounded-full bg-primary px-2 py-1 text-white ${className}`}
      {...rest}
    >
      <ArrowDownIcon size={16} />
      <span className="text-xs font-semibold">{discountPercentage}%</span>
    </div>
  );
};

export default DiscountBadge;
