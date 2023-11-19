export default function ReservationNoti() {
  return (
    <div className="w-fit px-4 py-2.5 bg-sky-300 justify-center items-center gap-2 inline-flex">
      <div className="relative flex flex-row space-x-5 text-center items-center">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.94561 0C11.0176 0 11.5536 0.7296 11.5536 1.5656C11.5536 2.6096 10.6224 3.5752 9.41041 3.5752C8.39521 3.5752 7.80321 2.9752 7.83121 1.9832C7.83121 1.1488 8.53601 0 9.94561 0ZM6.64721 16C5.80081 16 5.18081 15.4784 5.77281 13.1808L6.74401 9.1072C6.91281 8.456 6.94081 8.1944 6.74401 8.1944C6.49041 8.1944 5.39281 8.644 4.74241 9.088L4.32001 8.384C6.37761 6.6352 8.74481 5.6104 9.76081 5.6104C10.6064 5.6104 10.7472 6.6288 10.3248 8.1944L9.21201 12.476C9.01521 13.232 9.09921 13.4928 9.29681 13.4928C9.55041 13.4928 10.3824 13.1792 11.2 12.5272L11.68 13.1784C9.67841 15.216 7.49201 16 6.64721 16Z"
            fill="white"
          />
        </svg>

        <div className=" text-white text-base font-bold font-['Helvetica Neue'] leading-normal">
          You can reserve up to 3 reservations
        </div>
      </div>
    </div>
  )
}
