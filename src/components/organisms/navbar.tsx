import { BellIcon } from "lucide-react";
import Searchbar from "../molecules/searchbar";
import { Avatar, AvatarImage, AvatarFallback } from "../molecules/avatar";

const Navbar = () => {
  return (
    <nav className="sticky z-40 flex w-full flex-row flex-wrap items-center justify-between bg-white p-4">
      <Searchbar />
      <div className="flex flex-row items-center gap-x-5">
        <BellIcon />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
