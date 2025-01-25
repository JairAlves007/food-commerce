import { db } from "../_lib/prisma";

export const getAllCategories = async () => await db.category.findMany({});
