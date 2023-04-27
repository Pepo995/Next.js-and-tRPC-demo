import { useAppSelector, useAppDispatch } from "store";
import { FiSettings, FiMenu } from "react-icons/fi";
import Dropdown1 from "components/Navbar/dropdown-1";
import Dropdown2 from "components/Navbar/dropdown-2";
import Dropdown3 from "components/Navbar/dropdown-3";
import Dropdown4 from "components/Navbar/dropdown-4";
import Dropdown5 from "components/Navbar/dropdown-5";
import Dropdown6 from "components/Navbar/dropdown-6";
import Search from "components/Navbar/search";
import { setConfig } from "slices/config";

const Navbar: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const { rightSidebar, collapsed } = config;
  const dispatch = useAppDispatch();
  return (
    <div className="border-b border-gray-100 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="flex w-full items-center justify-start">
        <button
          onClick={() =>
            dispatch(
              setConfig({
                collapsed: !collapsed,
              })
            )
          }
          className="mx-4"
        >
          <FiMenu size={20} />
        </button>
        <Search />

        <Dropdown6 />
        <span className="ml-auto"></span>
        <Dropdown2 />
        <Dropdown1 />
        <Dropdown4 />
        <Dropdown3 />
        <Dropdown5 />
        <button
          className="mx-4 flex h-16 w-8 items-center justify-center"
          onClick={() =>
            dispatch(
              setConfig({
                rightSidebar: !rightSidebar,
              })
            )
          }
        >
          <FiSettings size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
