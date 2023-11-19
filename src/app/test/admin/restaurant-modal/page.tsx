'use client'
import RestaurantModal from '@/components/AdminPage/RestaurantModal/RestaurantModal'
import { useState } from 'react'

export default function TestRestaurantModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <RestaurantModal
        isVisible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleConfirm={function ({
          name,
          foodType,
          address,
          province,
          postalCode,
          telephone,
          imageUrl,
        }: {
          name: string
          foodType: string
          address: string
          province: string
          postalCode: string
          telephone: string
          imageUrl: string
        }): void {
          alert('Doneeeeeeeeeee')
        }}
        modalType="edit"
      />
    </div>
  )
}
