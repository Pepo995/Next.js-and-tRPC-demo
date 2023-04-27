import clsx from "clsx";
import Head from "next/head";
import { useAppSelector } from "store";
import Navbar1 from "components/Navbar";
import LeftSidebar2 from "components/left-sidebar-2";
import RightSidebar1 from "components/right-sidebar-1";

export type ECommerceProps = {
  children: React.ReactNode;
};

const Ecommerce: React.FC<ECommerceProps> = ({ children }) => {
  const config = useAppSelector((state) => state.config);
  const { background, collapsed } = config;

  return (
    <>
      <Head>
        <title>D-board</title>
      </Head>
      <div
        data-layout="e-commerce"
        data-collapsed={collapsed}
        className={clsx(
          "disable-scrollbars font-sans text-sm antialiased",
          background === "dark" ? "dark" : "light",
          collapsed ? "collapsed" : ""
        )}
      >
        <RightSidebar1 />
        <div className="flex w-full min-w-full flex-row items-stretch">
          <LeftSidebar2 />
          <div className="z-0 w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <Navbar1 />
            <div className="min-h-screen w-full p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ecommerce;
