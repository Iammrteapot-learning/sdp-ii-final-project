import Tag from "@/components/Common/Tag/Tag";
import Image from 'next/image'

export default function RestaurantResult({name,foodType,province,img}:{name:string,foodType:string,province:string,img:string}) {
  return (
    <div className="w-fit h-[283px] relative shadow bg-white rounded hover:border-4 hover:border-sky-200" >
      <div className="w-72 h-[195px] relative bg-zinc-200">
        {!!img ? <Image
          className="rounded-tl rounded-tr"
          src={img}
          alt="restaurant image"
          fill={true}
          objectFit="cover"
        />:<Image
        className="rounded-tl rounded-tr"
        src="/images/res_result_img.png"
        alt="restaurant image"
        fill={true}
        objectFit="contain"
      />}
      </div>
      <div className=" relative justify-start items-center p-2 space-y-2">
        <div className="text-red-500 text-lg font-bold font-['Helvetica Neue'] leading-[27px]">
          {name}
        </div>
        <div className="flex flex-row space-x-3 justify-start">
            <Tag label={foodType}/>
            <Tag label={province}/>
        </div>
      </div>
    </div>
  )
}
