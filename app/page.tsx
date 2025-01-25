import CategoriesList from "./_components/categories-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductsList from "./_components/products-list";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import PromoBanner from "./_components/promo-banner";
import RestaurantsList from "./_components/restaurants-list";
import { getLimitedProductsWithDiscount } from "./_services/product";

const Home = async () => {
  const products = await getLimitedProductsWithDiscount(10);

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

        <div className="pl-5">
          <ProductsList products={products} />
        </div>
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          source="/promo_banner_2.svg"
          alt="A partir de R$17,90 em lanches"
        />
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button variant="link" size="sm" className="h-fit p-0 font-semibold">
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>

        <RestaurantsList />
      </div>
    </>
  );
};

export default Home;
