export default function SearchNav() {
  return (
    <>
      <div className="w-[100%] px-[50px] h-[93px] flex flex-row justify-between items-center">
        <div className="w-[183px] h-[38px] justify-start items-center gap-2 inline-flex">
          <img src="src/assets/imges/Logo.png" className="w-[24px] h-[24px]" />
          <div className="text-green-950 text-[32px]  font-medium font-primary leading-[38px]">
            Ecobazar
          </div>
        </div>

        <form>
          <div className="relative w-[498px] h-[45px] rounded-md border border-neutral-200">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-[498px] h-[45px] rounded-md border border-neutral-200">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-[498px] h-[45px] rounded-md  font-primary  p-4 pl-10 text-sm text-gray-900"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0  h-[45px] px-6 py-1.5 bg-green-600  font-primary   text-white  rounded-r-lg  focus:ring-4 focus:outline-none focus:bg-green-800 dark:bg-green-800 hover:bg-green-800 dark:focus:bg-green-800"
            >
              Search
            </button>{" "}
          </div>
        </form>

        <div className="w-[191px] h-[34px]flex justify-between items-center  inline-flex">
          <img src="src/assets/imges/Heart.png" className="w-[24px] h-[24px]" />
          <div className="w-6 h-[0px]  rotate-90 border  border-stone-300"></div>

          <div className="justify-start items-center gap-3 flex">
            <img src="src/assets/imges/Bag.png" className="w-[24px] h-[24px]" />

            <div className="flex-col justify-start items-start gap-[7px] inline-flex">
              <div className="text-neutral-600 text-[11px] font-normal font-primary leading-[13.20px]">
                Shopping cart:
              </div>
              <div className="text-zinc-900 text-sm font-medium font-primary leading-[14px]">
                $57.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
