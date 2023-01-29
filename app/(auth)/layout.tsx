import Logo from "../../components/assets/logo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-mainDark flex flex-col min-h-screen max-h-screen overflow-hidden text-mainLight">
      <div className="flex justify-center py-6">
        <Logo />
      </div>

      <div className="text-center text-white mb-12">
        <h1 className="text-2xl font-bold">Thinkr</h1>
        <h3 className="font-thin">&quot;Speak your mind&quot;</h3>
      </div>

      <div className="flex justify-center grow">
        <div className="max-w-xs px-4">{children}</div>
      </div>

      <div className="relative hidden sm:block max-h-64">
        <svg
          className="w-full mt-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="fill-green opacity-80"
            d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            className="fill-darkHighlight opacity-80"
            d="M0,192L80,192C160,192,320,192,480,170.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Layout;
