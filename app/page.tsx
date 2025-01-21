import CategoriesList from "./_components/categories-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductsList from "./_components/products-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    distinct: ["imageUrl"],
  });

  return (
    <>
      <Header />

      <div className="flex flex-col gap-6 px-5 pt-6">
        <Search />

        <CategoriesList />

        <PromoBanner
          source="/promo_banner.svg"
          alt="Até 30% de desconto em Pizzas"
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="link" size="sm" className="h-fit p-0 font-semibold">
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <ProductsList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          source="/promo_banner_2.svg"
          alt="A partir de R$19,90 em lanches"
        />
      </div>
    </>
  );
};

export default Home;
