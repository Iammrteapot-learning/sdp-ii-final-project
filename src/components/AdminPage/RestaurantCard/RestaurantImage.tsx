'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function RestaurantImage({
  img,
  res_id,
}: {
  img: string
  res_id: string
}) {
  const [hovering, setHovering] = useState(false)
  const ViewDetailLabel = () => {
    return (
      <Link href={`/admin/restaurants/${res_id}`}>
        <div
          className="w-[60%] h-[18px] left-[63px] bottom-[2px] absolute bg-zinc-400 rounded-[20px]"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="flex flex-row justify-center items-center space-x-1">
            <div className="relative text-center text-white text-xs font-bold font-['Helvetica Neue'] leading-[18px]">
              View Detail
            </div>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5C6 4.73478 5.89464 4.48043 5.70711 4.29289C5.51957 4.10536 5.26522 4 5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5C4 5.26522 4.10536 5.51957 4.29289 5.70711C4.48043 5.89464 4.73478 6 5 6Z"
                fill="#FAFAFA"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.229004 5C0.866004 2.9715 2.761 1.5 5 1.5C7.239 1.5 9.134 2.9715 9.771 5C9.134 7.0285 7.239 8.5 5 8.5C2.761 8.5 0.866004 7.0285 0.229004 5ZM7 5C7 5.53043 6.78929 6.03914 6.41422 6.41421C6.03914 6.78929 5.53044 7 5 7C4.46957 7 3.96086 6.78929 3.58579 6.41421C3.21072 6.03914 3 5.53043 3 5C3 4.46957 3.21072 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3C5.53044 3 6.03914 3.21071 6.41422 3.58579C6.78929 3.96086 7 4.46957 7 5Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="w-[162px] h-[131px] relative bg-white rounded shadow">
      {!img ? (
        <div className="w-[162px] h-[131px] rounded-tl rounded-tr rounded-br-[65.50px] bg-zinc-200 flex justify-centers items-center">
          <Image
            src={'/images/res_reserve_img.png'}
            alt="restaurant image"
            fill={true}
            objectFit="contain"
          />
        </div>
      ) : (
        <Image
          className="w-[162px] h-[131px] rounded-tl rounded-tr rounded-br-[65.50px]"
          src={img}
          alt="restaurant image"
          fill={true}
          objectFit="cover"
        />
      )}
      <Link href={`/admin/restaurants/${res_id}`}>
        <button
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <svg
            className="left-[140px] bottom-0 absolute"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z"
              stroke="#A1A1AA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.04834 9.99996C3.11001 6.61913 6.26917 4.16663 10 4.16663C13.7317 4.16663 16.89 6.61913 17.9517 9.99996C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99996Z"
              stroke="#A1A1AA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </Link>
      {hovering && <ViewDetailLabel />}
    </div>
  )
}
