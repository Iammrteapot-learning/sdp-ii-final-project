'use client'
import React from 'react'

export default function ModalOverlay({
  isVisible,
  onClose = () => {},
  zIndex = 20,
  children,
}: {
  isVisible: boolean
  onClose: () => void
  zIndex?: number
  children?: React.ReactNode
}) {
  return (
    <div
      className={`fixed top-0 left-0 w-[100%] h-[100vh] justify-center items-center ${
        isVisible ? 'flex' : 'hidden'
      }`}
    >
      <div
        className={`bg-black w-[100%] h-[100vh] opacity-20 absolute top-0 left-0 z-[${zIndex}]`}
        onClick={onClose}
      />
      <div
        className={`z-[${zIndex + 10}] relative`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
