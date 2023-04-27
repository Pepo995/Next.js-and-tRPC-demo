import clsx from "clsx";
import { FiChevronDown } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import List1 from "./list-1";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden text-left lg:inline-block">
      <div>
        <Menu.Button className="flex w-full items-center justify-center px-4 py-2 text-xs font-bold uppercase focus:outline-none">
          {({ open }) => (
            <>
              <span>Explore</span>
              <FiChevronDown
                className={clsx(
                  "ml-2 mt-[-2px] h-4 w-4 duration-300 ease-in-out",
                  !open && "rotate-0",
                  open && "-rotate-90"
                )}
                aria-hidden="true"
              />
            </>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 w-[512px] origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
          <List1 />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
