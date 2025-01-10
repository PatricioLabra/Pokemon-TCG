import Link from "next/link";
import { TbPokeball } from "react-icons/tb";

export const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center fixed left-0 right-0 z-50 h-10">
        <div className="text-4xl font-bold text-white">
          <Link href="/sets">
            <TbPokeball />
          </Link>
        </div>
      </div>
    </nav>
  );
};
