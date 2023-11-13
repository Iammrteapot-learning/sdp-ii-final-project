export default function RestaurantInfoPanel({location,tel}:{location:string,tel:string}) {
  return (
    <div className="w-[621px] h-[54px] relative mt-8">
      <div className="w-[398px] h-[50px] left-0 top-0 absolute">
        <img src="images/location.png" width={35} />
        <div className="w-[352px] h-[50px] left-[46px] top-0 absolute text-black text-sm font-light font-['Helvetica Neue'] leading-[21px]">
          {location}
        </div>
      </div>
      <div className="w-10 h-[0px] ml-96 top-[3px] absolute origin-top-left rotate-90 border border-zinc-400"></div>
      <div className="w-[212px] h-[51px] left-[409px] top-[3px] absolute">
        <img src="images/phone.png" width={35} />
        <div className="w-[30px] h-[30px] left-0 top-0 absolute" />
        <div className="w-[167px] h-[49px] left-[45px] top-[2px] absolute text-black text-base font-light font-['Helvetica Neue'] leading-normal">
          {tel}
        </div>
      </div>
    </div>
  )
}
