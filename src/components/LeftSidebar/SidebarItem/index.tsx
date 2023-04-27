import React, {ReactNode} from "react";

import Typography from "components/typography";
import Link from "next/link";

interface SidebarItemProps {
  children: ReactNode;
  href: string;
}

const SidebarItem = ({children, href}: SidebarItemProps) => (
  <Link href={href}>
    <Typography variant="subtitle">{children}</Typography>
  </Link>
);

export default SidebarItem;
