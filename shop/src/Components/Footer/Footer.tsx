import FooterDetails from "./FooterDetails";
export default function Footer() {
  return (
    <>
      <div>
        <div className="w-[100%] h-[0px]  absolute opacity-70 border border-stone-300"></div>
        <div className="flex bg-zinc-100 flex-row justify-between items-center px-[54px] py-[40px]">
          <div className="w-[183px] h-[38px] justify-start items-center gap-2 inline-flex">
            <img
              src="src/assets/imges/Logo.png"
              className="w-[24px] h-[24px]"
            />
            <div className="text-green-950 text-[32px]  font-medium font-primary leading-[38px]">
              Ecobazar
            </div>
          </div>
          <div className="w-[448px] h-[61px]    flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-green-950 text-2xl font-medium font-primary leading-9">
              Subcribe our Newsletter
            </div>
            <div className="w-[448px] text-neutral-500 text-sm font-normal font-primary leading-[21px]">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </div>
          </div>
          <div className="relative w-[498px] h-[45px] rounded-3xl border border-neutral-200 bg-white ">
            <input
              type="search"
              id="default-search"
              className="w-[498px] h-full  rounded-3xl   font-primary  p-4 pl-10 text-sm text-gray-900"
              placeholder="Your email address"
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0  h-[45px] px-6 py-1.5 bg-green-600  font-primary   text-white  rounded-3xl  focus:ring-4 focus:outline-none focus:bg-green-800 dark:bg-green-800 hover:bg-green-800 dark:focus:bg-green-800"
            >
              Subscribe
            </button>{" "}
          </div>
        </div>
        <FooterDetails/>

      </div>
    </>
  );
}
