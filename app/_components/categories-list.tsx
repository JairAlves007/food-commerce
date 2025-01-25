import { getAllCategories } from "../_services/category";
import CategoryItem from "./category-item";

const CategoriesList = async () => {
  const categories = await getAllCategories();

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;
