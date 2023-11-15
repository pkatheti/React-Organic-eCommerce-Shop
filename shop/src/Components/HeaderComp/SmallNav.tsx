
export default function SmallNav() {
  return (
    <div className="w-[100%] h-[42px] px-[50px]  bg-zinc-800 shadow justify-between items-center inline-flex">
    <div className="justify-start items-center gap-2 flex">
    <img src='src/assets/imges/MapPin.png' className='w-[15px] h-[18px]' />
        <div className="text-zinc-400 text-xs font-normal font-primary leading-none">Store Location: Lincoln- 344, Illinois, Chicago, USA</div>
    </div>
    <div className="justify-start items-center gap-5 flex">
        <div className="justify-start items-center gap-1.5 flex">
            <select  className="text-center text-zinc-400 bg-zinc-800 text-xs font-normal font-primary leading-none">
                <option value="Eng">Eng</option>
                <option value="Eng">Tel</option>
            </select>
            {/* <div>Eng</div> */}
        </div>
        <div className="justify-start items-center gap-1.5 flex">
        <select  className="text-center text-zinc-400 bg-zinc-800 text-xs font-normal font-primary leading-none">
                <option value="Eng">USD</option>
                <option value="Eng">KWD</option>
            </select>
        </div>
        <div className="w-[15px] h-[0px]  rotate-90 border border-white border-opacity-10"></div>
        <div className="justify-start items-start gap-1 flex">
            <div className="text-zinc-400 text-xs font-normal font-primary leading-none">Sign In</div>
            <div className="text-zinc-400 text-xs font-normal font-primary leading-none">/</div>
            <div className="text-zinc-400 text-xs font-normal font-primary leading-none">Sign Up</div>
        </div>
    </div>
</div>
  )
}
