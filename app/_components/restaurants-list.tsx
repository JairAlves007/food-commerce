import { getLimitedRestaurants } from "../_services/restaurant";
import RestaurantItem from "./restaurant-item";

const RestaurantsList = async () => {
  const restaurants = await getLimitedRestaurants(10);

  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantsList;
