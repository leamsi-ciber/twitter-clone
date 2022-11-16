import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image
          src="https://www.hsf.co.uk/wp-content/uploads/2018/07/Twitter_logo_bird_transparent_png-1024x831.png"
          width={30}
          height={30}
          alt="twitter-logo"
        />
      </div>
    </div>
  );
};

export default Sidebar;
