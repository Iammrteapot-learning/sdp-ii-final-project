'use client'
import ReservationCard from "@/components/AdminPage/ReservationCard/ReservationCard"
import WarningModal from "@/components/Common/WarningModal/WarningModal"
import { useState } from "react"

export default function AuthRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  //mock data
  const res_1 = {id:"001",name:"Tinna Chuaykoblap" , tel:"081-234-5678" ,participants:"2", createdAt:"2023-12-12"}
  const eachDateReserves = [res_1,res_1,res_1]
  const date='2023-12-13'
  //
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false)
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false)
  return (
    <div>
      <ReservationCard date={date} res_list={eachDateReserves} onDelete={() => setIsWarningModalOpen(true)} onEdit={() => setIsReservationModalOpen(true)}/>
      <WarningModal
        type={'DELETE'}
        isVisible={isWarningModalOpen}
        onClose_Dismiss={() => setIsWarningModalOpen(false)}
        onClose_Confirm={() => {
          setIsWarningModalOpen(false)
        }}
        id={'001'}
      />
    </div>
  )
}
