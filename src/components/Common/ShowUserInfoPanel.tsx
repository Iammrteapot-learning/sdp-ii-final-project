export default function ShowUserInfoPanel({username,tel}:{username:string,tel:string}) {
  return (
    <div className="w-[359px] h-[97px] relative mt-3 flex flex-col items-start">
      <div className="w-[359px] h-[43px] left-0 top-0 absolute inline-flex justify-center space-x-28">
        <div className="left-0 top-[10px] absolute text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          Name
        </div>
        <div className="left-0 top-[10px] absolute text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          {username}
        </div>
      </div>
      <div className="w-[359px] h-[43px] left-[23px] top-[48px] absolute inline-flex justify-center space-x-28">
        <div className="left-0 top-[10px] absolute text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          Tel
        </div>
        <div className="left-0 top-[10px]  absolute text-black text-base font-normal font-['Helvetica Neue'] leading-normal">
          {tel}
        </div>
      </div>
    </div>
  )
}
