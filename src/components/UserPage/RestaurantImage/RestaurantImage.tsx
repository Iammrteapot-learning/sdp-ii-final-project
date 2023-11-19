import Image from 'next/image'

export default function RestaurantImage({ img }: { img: string }) {
  return (
    <div
      className="w-[350px] h-[410px] bg-zinc-200 relative rounded-tl-[116px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px] shadow"
      style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)' }}
    >
      {img == '' ? (
        <Image
          className="rounded-tl-[116px] rounded-tr"
          alt="restaurant image"
          src={'/images/res_img.png'}
          fill={true}
          priority={true}
          objectFit="cover"
        />
      ) : (
        <Image
          className="rounded-tl-[116px] rounded-tr"
          alt="restaurant image"
          src={img}
          fill={true}
          priority={true}
          objectFit="cover"
        />
      )}
    </div>
  )
}
