import TestImage from "../../assets/test_background_img.jpg";
import ProfileImage from "../../assets/Profile_Image.png";

export const Profile = () => {
  return (
    <div className="flex flex-col bg-darkTransparentHighlight w-full rounded-2xl">
      <div className="flex flex-col">
        <img src={TestImage} className="w-full h-24 rounded-t-2xl" />
        <img
          src={ProfileImage}
          className="w-16 h-16 rounded-2xl mx-auto -mt-8"
        />
      </div>
      <div className="border-b border-b-gray text-center">
        <div className="text-xl font-bold">John Doe</div>
        <div className="text-gray text-xs mb-2">@John Doe</div>
        <div className="text-center text-sm mb-6">
          Profesional software engineer
        </div>
      </div>

      <div className="flex text-center">
        <div className="basis-1/2  border-r border-r-gray mt-2 mb-2 text-sm">
          232
          <div className="basis-1/2 text-gray text-xs">Following</div>
        </div>

        <div className="basis-1/2 text-sm mt-2">
          322
          <div className="basis-1/2 text-gray text-xs">Followers</div>
        </div>
      </div>
      <div className="border-t border-t-gray p-4 w-full justify-center flex">
        <a className="underline text-green cursor-pointer text-sm">
          Show Profile
        </a>
      </div>
    </div>
  );
};
