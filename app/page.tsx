import Image from "next/image";
import CategoriesList from "./_components/categories-list";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-6 px-5 pt-6">
        <Search />

        <CategoriesList />

        <Image
          src="/promo_banner.svg"
          alt="Até 30% de desconto em Pizzas"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
}
