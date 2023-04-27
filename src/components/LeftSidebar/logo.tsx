import { FiBox, FiMenu } from "react-icons/fi";
import { setConfig } from slices/config";
import { useAppSelector, useAppDispatch } from store";
import Link from "next/link";

const Logo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, collapsed } = useAppSelector((state) => state.config);
  return (
    <div className="flex w-full flex-row items-center justify-start truncate whitespace-nowrap text-base font-bold uppercase tracking-wider text-blue-500">
      <Link href="/">
        <p className="flex flex-row items-center justify-start space-x-2">
          <FiBox size={28} />
          <span>{name}</span>
        </p>
      </Link>
      <button
        onClick={() =>
          dispatch(
            setConfig({
              collapsed: !collapsed,
            })
          )
        }
        className="ml-auto block text-gray-900 dark:text-white lg:hidden"
      >
        <FiMenu size={20} />
      </button>
    </div>
  );
};

export default Logo;
