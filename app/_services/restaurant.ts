import { db } from "../_lib/prisma";

export const getLimitedRestaurants = async (take: number) => {
  return await db.restaurant.findMany({
    take,
  });
};
