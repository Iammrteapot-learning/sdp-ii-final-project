export default function Address({
  address,
  province,
  postalcode,
  tel,
}: {
  address: string
  province: string
  postalcode: string
  tel: string
}) {
  return (
    <div className="w-fit h-fit relative p-5 bg-zinc-100 rounded-[20px] flex flex-col justify-start items-start">
      <div className="relative flex justify-start items-start space-x-5">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.83753 7.08751C11.135 4.79008 14.251 3.49939 17.5 3.49939C20.7491 3.49939 23.8651 4.79008 26.1625 7.08751C28.46 9.38495 29.7507 12.5009 29.7507 15.75C29.7507 18.9991 28.46 22.1151 26.1625 24.4125L17.5 33.075L8.83753 24.4125C7.69988 23.275 6.79744 21.9245 6.18174 20.4382C5.56604 18.9519 5.24915 17.3588 5.24915 15.75C5.24915 14.1412 5.56604 12.5482 6.18174 11.0619C6.79744 9.57553 7.69988 8.22505 8.83753 7.08751ZM17.5 19.25C18.4283 19.25 19.3185 18.8813 19.9749 18.2249C20.6313 17.5685 21 16.6783 21 15.75C21 14.8218 20.6313 13.9315 19.9749 13.2751C19.3185 12.6188 18.4283 12.25 17.5 12.25C16.5718 12.25 15.6815 12.6188 15.0252 13.2751C14.3688 13.9315 14 14.8218 14 15.75C14 16.6783 14.3688 17.5685 15.0252 18.2249C15.6815 18.8813 16.5718 19.25 17.5 19.25Z"
            fill="#EF4444"
          />
        </svg>

        <div className="w-fit flex flex-col justify-start items-start">
          <div className="relative text-black text-base font-light font-['Helvetica Neue'] leading-normal">
            {address}
          </div>
          <div className="mt-3 relative text-black text-base font-light font-['Helvetica Neue'] leading-normal">
            Province : {province} &nbsp; Postal Code : {postalcode}
          </div>
        </div>
      </div>
      <div className="relative mt-4 flex justify-start items-start space-x-5">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3H7.7295C8.08456 3.00016 8.42805 3.12627 8.69887 3.35589C8.96968 3.58551 9.15027 3.90375 9.2085 4.254L10.3185 10.9065C10.3715 11.2233 10.3215 11.5488 10.1756 11.835C10.0298 12.1213 9.79597 12.3531 9.5085 12.4965L7.1865 13.656C8.01916 15.7195 9.25925 17.5939 10.8327 19.1673C12.4061 20.7408 14.2805 21.9808 16.344 22.8135L17.505 20.4915C17.6483 20.2043 17.8799 19.9706 18.1658 19.8248C18.4518 19.679 18.7769 19.6288 19.0935 19.6815L25.746 20.7915C26.0963 20.8497 26.4145 21.0303 26.6441 21.3011C26.8737 21.572 26.9998 21.9154 27 22.2705V25.5C27 25.8978 26.842 26.2794 26.5607 26.5607C26.2794 26.842 25.8978 27 25.5 27H22.5C11.73 27 3 18.27 3 7.5V4.5Z"
            fill="#EF4444"
          />
        </svg>

        <div className="w-fit relative text-black text-base font-light font-['Helvetica Neue'] leading-normal">
          {tel}
        </div>
      </div>
    </div>
  )
}
