import Head from "next/head";
import { useAppSelector } from "store";
import Navbar from "components/Navbar";
import LeftSidebar from "components/LeftSidebar";
import RightSidebar1 from "components/right-sidebar-1";

export type Layout1Props = {
  children: React.ReactNode;
};

const Layout1: React.FC<Layout1Props> = ({ children }) => {
  const config = useAppSelector((state) => state.config);
  const { background, layout, collapsed } = config;

  return (
    <>
      <Head>
        <title>D-board</title>
      </Head>
      <div
        data-layout={layout}
        data-collapsed={collapsed}
        data-background={background}
        className={`disable-scrollbars font-sans text-sm antialiased ${
          background === "dark" ? "dark" : ""
        }`}
      >
        <RightSidebar1 />
        <div className="flex flex-row">
          <LeftSidebar />
          <div className="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <Navbar />
            <div className="min-h-screen w-full p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout1;
