import AccountLinks from "components/Navbar/account-links";
import Image from "next/image";
import clsx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import profilePic from "components/Navbar/m1.png";

const Dropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative hidden text-left lg:inline-block">
      <div>
        <Menu.Button className="focus:outline-none">
          <div className="relative h-8 w-8">
            <Image
              src={profilePic}
              alt="avatar"
              className="rounded-full shadow-lg"
            />
            <span className="absolute right-[-6px] top-[-6px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-0 text-center text-xs font-bold leading-none text-white ring-2 ring-white">
              2
            </span>
          </div>
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
        <Menu.Items
          className={clsx(
            "absolute w-[192px] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-gray-800",
            "right-0 origin-top-right"
          )}
        >
          <AccountLinks />
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default Dropdown;
