import LocationIcon from '../Icon/LocationIcon'
import PhoneIcon from '../Icon/PhoneIcon'

export default function RestaurantInfoPanel({
  location,
  tel,
}: {
  location: string
  tel: string
}) {
  return (
    <div className="w-[85%] flex">
      <div className="w-[60%] flex">
        <LocationIcon />
        <div className="ps-4 w-[80%] text-black text-sm font-light font-['Helvetica Neue'] leading-[21px]">
          {location}
        </div>
      </div>
      <div className="w-[0px] h-[full] border border-zinc-400"></div>
      <div className="w-[40%] flex ps-4">
        <PhoneIcon />
        <div className="ps-4 w-[80%] text-black text-base font-light font-['Helvetica Neue'] leading-normal">
          {tel}
        </div>
      </div>
    </div>
  )
}
