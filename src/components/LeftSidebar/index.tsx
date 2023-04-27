import { useAppSelector } from "store";
import Button from "../button";
import SidebarItem from "./SidebarItem";
import { SidebarMenuItems } from "utils/constants";
import clsx from "clsx";

const LeftSidebar = () => {
  const config = useAppSelector((state) => state.config);
  const { collapsed } = config;
  return (
    <aside
      className={clsx(
        "w-64 border-r border-gray-100 bg-white text-gray-900 transition-all duration-500 ease-in-out dark:border-gray-800 dark:bg-gray-900 dark:text-white",
        {
          hidden: collapsed,
        }
      )}
    >
      <div>
        <div className="flex flex-col gap-y-14 p-4">
          <div className="w-full">
            <Button text="Sign Out" />
          </div>
          {SidebarMenuItems.map(({ title, link }, index) => (
            <SidebarItem href={link} key={index}>
              {title}
            </SidebarItem>
          ))}
        </div>
      </div>
    </aside>
  );
};
export default LeftSidebar;
