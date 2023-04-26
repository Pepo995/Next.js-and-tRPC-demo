interface SidebarItemProps {
  text: string;
}

const SidebarItem = ({ text }: SidebarItemProps) => {
  return <p className="text-gray-300">{text}</p>;
};

export default SidebarItem;
