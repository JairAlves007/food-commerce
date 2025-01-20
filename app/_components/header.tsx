import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 pt-6">
      <Image
        src="/fsw-foods.svg"
        alt="Food Commerce Logo"
        width={150}
        height={180}
      />

      <Button size="icon" variant="ghost">
        <MenuIcon />
      </Button>
    </header>
  );
};

export default Header;
