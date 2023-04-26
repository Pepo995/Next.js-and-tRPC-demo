import { Button } from "../atoms/button";
import { useClerk } from "@clerk/nextjs";
import SidebarItem from "../molecules/sidebarItem";

interface SidebarProps {
  items: string[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const { signOut } = useClerk();
  return (
    <aside className="h-full bg-gray-800 px-5 py-4">
      <div className="flex w-64 flex-col gap-y-20">
        <Button onClick={() => signOut()}>Sign Out</Button>
        <div className="flex w-full flex-col gap-y-12">
          {items.map((item, index) => (
            <SidebarItem text={item} key={index} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
