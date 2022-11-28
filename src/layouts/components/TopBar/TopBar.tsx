import Logo from "../../../assets/logo";

export const TopBar = () => {
  return (
    <div className="flex">
      <div className="w-[20rem] flex p-6 items-center">
        <div className="mr-4">
          <Logo />
        </div>

        <input
          className="bg-darkTransparentHighlight p-2 rounded-2xl w-full"
          placeholder="Look for something.."
        />
      </div>
      <div className="grow p-6 text-2xl flex font-bold items-center">
        PageTitle
      </div>
      <div className="w-[20rem] p-6 flex items-center">right..</div>
    </div>
  );
};
