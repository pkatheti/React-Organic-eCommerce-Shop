
export default function CarouselComp() {
  return (
        <div className="w-[100%] h-[450px]  flex flex-row justify-center gap-2 items-center bg-white">
                <div className="flex flex-col justify-center items-end top-[100px]">
                <img className="w-[595px] h-[364px]" src="https://via.placeholder.com/795x564" />

<div className="w-[100px] h-[100px]  absolute">
<div className="w-[100px] h-[100px]  bg-amber-500 rounded-full" />
<div className="w-[65px] h-[54px] left-[17px] top-[21px] absolute flex-col justify-start items-center inline-flex">
<div className="text-center text-white text-[32px] font-semibold font-['Poppins'] leading-[38.40px]">70%</div>
<div className="text-center text-white text-base font-medium font-['Poppins'] uppercase leading-none tracking-tight">off</div>
</div>
</div>
                </div>
                <div className="flex flex-col justify-start gap-2">
                <div className="w-[536px] h-[156px] flex-col justify-start items-start gap-2 inline-flex">
    <div className="text-center text-green-600 text-sm font-normal font-['Segoe Script'] uppercase leading-[14px] tracking-tight">Welcome to shopery</div>
    <div className="w-[536px] text-green-950 text-[56px] font-semibold font-['Poppins'] leading-[67.20px]">Fresh & Healthy<br/>Organic Food</div>
</div><div className="w-[535px] text-neutral-500 text-lg font-normal font-['Poppins'] leading-[27px]">Free shipping on all your order. we deliver, you enjoy</div>
                <div className="w-[191px] h-[51px] px-10 py-4 bg-green-600 rounded-[43px] justify-center items-center gap-4 inline-flex">
    <div className="text-white text-base font-semibold font-['Poppins'] leading-tight">Shop now</div>
    <div className="w-[15px] h-3 relative">
    </div>
</div>
                
                </div>
        </div>
  )
}
