'use client'
import ModalOverlay from '@/components/Common/ModalOverlay/ModalOverlay'
import ModalHeaderText from './ModalHeaderText'
import InputFieldWithOutLabel from '@/components/Common/InputFieldWithOutLabel/InputFieldWithOutLabel'
import LocationIcon from '@/components/Common/Icon/LocationIcon'
import ImageIcon from '@/components/Common/Icon/ImageIcon'
import { useCallback, useEffect, useState } from 'react'

type ModalType = 'CREATE' | 'UPDATE'

type InputType =
  | 'name'
  | 'foodType'
  | 'address'
  | 'province'
  | 'postalCode'
  | 'telephone'
  | 'imageUrl'

const placeholderMessage: Record<InputType, string> = {
  name: 'Enter restaurant name',
  foodType: 'e.g. Thai, Chinese, Japanese',
  address: 'Enter your address',
  province: 'Bangkok',
  postalCode: '10100',
  telephone: 'Enter your telephone number',
  imageUrl: 'Fill in the image URL',
}

const errorMessage: Record<InputType, string> = {
  name: 'Please enter the restaurant name (max 50 characters)',
  address: 'Please enter the restaurant address',
  province: 'Please enter the restaurant province',
  postalCode: 'Please enter the restaurant postal code',
  telephone: 'Please enter the restaurant telephone',
  foodType: 'Please enter the restaurant food type',
  imageUrl: 'Please enter the restaurant image URL',
}

export default function RestaurantModal({
  isVisible,
  onClose,
  onConfirm,
  modalType,
  defaultName = '',
  defaultFoodType = '',
  defaultAddress = '',
  defaultProvince = '',
  defaultPostalCode = '',
  defaultTelephone = '',
  defaultImageUrl = '',
}: {
  isVisible: boolean
  onClose: () => void
  onConfirm: ({
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
  }) => void
  modalType: ModalType
  defaultName?: string
  defaultFoodType?: string
  defaultAddress?: string
  defaultProvince?: string
  defaultPostalCode?: string
  defaultTelephone?: string
  defaultImageUrl?: string
}) {
  const [name, setName] = useState('')
  const [foodType, setFoodType] = useState('')
  const [address, setAddress] = useState('')
  const [province, setProvince] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [telephone, setTelephone] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (modalType === 'UPDATE') {
      setName(defaultName)
      setFoodType(defaultFoodType)
      setAddress(defaultAddress)
      setProvince(defaultProvince)
      setPostalCode(defaultPostalCode)
      setTelephone(defaultTelephone)
      setImageUrl(defaultImageUrl)
    } else if (modalType === 'CREATE') {
      setName('')
      setFoodType('')
      setAddress('')
      setProvince('')
      setPostalCode('')
      setTelephone('')
      setImageUrl('')
    }
  }, [
    modalType,
    defaultName,
    defaultFoodType,
    defaultAddress,
    defaultProvince,
    defaultPostalCode,
    defaultTelephone,
    defaultImageUrl,
    setName,
    setFoodType,
    setAddress,
    setProvince,
    setPostalCode,
    setTelephone,
    setImageUrl,
  ])

  const [isNameError, setIsNameError] = useState(false)
  const [isFoodTypeError, setIsFoodTypeError] = useState(false)
  const [isAddressError, setIsAddressError] = useState(false)
  const [isProvinceError, setIsProvinceError] = useState(false)
  const [isPostalCodeError, setIsPostalCodeError] = useState(false)
  const [isTelephoneError, setIsTelephoneError] = useState(false)
  const [isImageUrlError, setIsImageUrlError] = useState(false)

  const validateInput = useCallback(() => {
    const isNameValid = name !== '' && name.length <= 50
    const isFoodTypeValid = foodType !== ''
    const isAddressValid = address !== ''
    const isProvinceValid = province !== ''
    const isPostalCodeValid = postalCode.length <= 5
    const isTelephoneValid = telephone.length === 10
    const isImageUrlValid = imageUrl !== ''

    setIsNameError(!isNameValid)
    setIsFoodTypeError(!isFoodTypeValid)
    setIsAddressError(!isAddressValid)
    setIsProvinceError(!isProvinceValid)
    setIsPostalCodeError(!isPostalCodeValid)
    setIsTelephoneError(!isTelephoneValid)
    setIsImageUrlError(!isImageUrlValid)

    return (
      isNameValid &&
      isFoodTypeValid &&
      isAddressValid &&
      isProvinceValid &&
      isPostalCodeValid &&
      isTelephoneValid &&
      isImageUrlValid
    )
  }, [
    name,
    foodType,
    address,
    province,
    postalCode,
    telephone,
    imageUrl,
    setIsNameError,
    setIsAddressError,
    setIsFoodTypeError,
    setIsPostalCodeError,
    setIsProvinceError,
    setIsTelephoneError,
    setIsImageUrlError,
  ])

  return (
    <>
      <ModalOverlay isVisible={isVisible} onClose={onClose}>
        <div
          className="w-[735px] max-h-[450px] px-16 pt-8 pb-8 bg-zinc-100 shadow rounded-[30px]
        flex flex-col gap-3 items-center z-50 overflow-auto no-scrollbar"
        >
          <ModalHeaderText
            label={
              modalType === 'CREATE' ? 'Create Restaurant' : 'Edit Restaurant'
            }
          />
          <div className="w-full flex items-center">
            <label
              htmlFor="restaurant-name"
              className="w-[30%] text-right pe-4"
            >
              Restaurant Name
            </label>
            <div className="w-[60%]">
              <InputFieldWithOutLabel
                name={'restaurant-name'}
                onChange={(value) => setName(value)}
                placeholder={placeholderMessage['name']}
                isError={isNameError}
                errorMessage={errorMessage['name']}
                defaultValue={name}
              />
            </div>
          </div>
          <div className="w-full flex items-center">
            <label htmlFor="food-type" className="w-[30%] text-right pe-4">
              Food Type
            </label>
            <div className="w-[40%]">
              <InputFieldWithOutLabel
                name={'food-type'}
                onChange={(value) => setFoodType(value)}
                placeholder={placeholderMessage['foodType']}
                isError={isFoodTypeError}
                errorMessage={errorMessage['foodType']}
                defaultValue={foodType}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <LocationIcon />
            <label htmlFor="address" className="w-[10%] text-right pe-4">
              Address
            </label>
            <div className="w-[75%]">
              <InputFieldWithOutLabel
                name={'address'}
                onChange={(value) => setAddress(value)}
                placeholder={placeholderMessage['address']}
                isError={isAddressError}
                errorMessage={errorMessage['address']}
                defaultValue={address}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-4 ps-[38px]">
            <label htmlFor="province" className="w-[10%] text-right me-[6px]">
              Province
            </label>
            <div className="w-[30%]">
              <InputFieldWithOutLabel
                name={'province'}
                onChange={(value) => setProvince(value)}
                placeholder={placeholderMessage['province']}
                isError={isProvinceError}
                errorMessage={errorMessage['province']}
                defaultValue={province}
              />
            </div>
            <label htmlFor="postal_code" className="w-[15%] text-right ">
              Postal Code
            </label>
            <div className="w-[30%]">
              <InputFieldWithOutLabel
                name={'postal_code'}
                onChange={(value) => setPostalCode(value)}
                placeholder={placeholderMessage['postalCode']}
                isError={isPostalCodeError}
                errorMessage={errorMessage['postalCode']}
                defaultValue={postalCode}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-4 ps-[42px]">
            <label htmlFor="telephone" className="w-[10%] text-right me-1">
              Tel
            </label>
            <div className="w-[60%]">
              <InputFieldWithOutLabel
                name={'telephone'}
                onChange={(value) => setTelephone(value)}
                placeholder={placeholderMessage['telephone']}
                isError={isTelephoneError}
                errorMessage={errorMessage['telephone']}
                defaultValue={telephone}
              />
            </div>
          </div>
          <div className="w-full flex items-center gap-2 mb-4">
            <ImageIcon />
            <label htmlFor="image-url" className="w-[20%] text-right me-2">
              Upload Image
            </label>
            <div className="w-[70%]">
              <InputFieldWithOutLabel
                name={'image-url'}
                onChange={(value) => setImageUrl(value)}
                placeholder={placeholderMessage['imageUrl']}
                isError={isImageUrlError}
                errorMessage={errorMessage['imageUrl']}
                defaultValue={imageUrl}
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <button
              className="px-4 py-2 bg-sky-400 rounded justify-start items-center 
          gap-2 inline-flex text-white text-base font-medium hover:bg-blue-500"
              onClick={() => {
                if (validateInput()) {
                  onConfirm({
                    name,
                    foodType,
                    address,
                    province,
                    postalCode,
                    telephone,
                    imageUrl,
                  })
                }
              }}
            >
              Confirm
            </button>
            <button
              className="px-4 py-2 bg-red-500 rounded justify-start items-center 
          gap-2 inline-flex text-white text-base font-medium hover:bg-red-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalOverlay>
    </>
  )
}
