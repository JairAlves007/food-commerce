import Image from "next/image";
import { CategoryItemProps } from "../_interfaces/category-item";

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 shadow-md hover:cursor-pointer">
      <Image
        src={category.imageUrl}
        alt={category.name}
        width={30}
        height={30}
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </div>
  );
};

export default CategoryItem;
