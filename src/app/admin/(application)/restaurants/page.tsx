'use client'
import RestaurantCard from '@/components/AdminPage/RestaurantCard/RestaurantCard'
import RestaurantModal from '@/components/AdminPage/RestaurantModal/RestaurantModal'
import AddIcon from '@/components/Common/Icon/AddIcon'
import SearchIcon from '@/components/Common/Icon/SearchIcon'
import InputFieldWithOutLabel from '@/components/Common/InputFieldWithOutLabel/InputFieldWithOutLabel'
import PageTopicText from '@/components/Common/PageTopicText/PageTopicText'
import RestaurantSuccessModal, {
  SuccessModalType,
} from '@/components/Common/SuccessModal/RestaurantSuccessModal'
import RestaurantWarningModal, {
  WarningModalType,
} from '@/components/Common/WarningModal/RestaurantWarningModal'
import {
  RestaurantInformation,
  RestaurantRequestBody,
  RestaurantService,
} from '@/services/RestaurantService'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type RestaurantWithFlag = RestaurantInformation & { isShow: boolean }

const restaurantFocusDefault: RestaurantInformation = {
  name: '',
  address: '',
  foodtype: '',
  province: '',
  postalcode: '',
  tel: '',
  picture: '',
}

export default function AdminRestaurantsPage() {
  const [searchInput, setSearchInput] = useState('')
  const [restaurantList, setRestaurantList] = useState<RestaurantWithFlag[]>([])
  const [triggerSearch, setTriggerSearch] = useState(false)

  const [restaurantFocus, setRestaurantFocus] = useState<RestaurantInformation>(
    restaurantFocusDefault
  )
  const [isShowRestaurantModal, setIsShowRestaurantModal] = useState(false)
  const [isShowWarningModal, setIsShowWarningModal] = useState(false)
  const [isShowSuccessModal, setIsShowSuccessModal] = useState(false)

  const [successType, setSuccessType] = useState<SuccessModalType>('CREATE')
  const [warningType, setWarningType] = useState<WarningModalType>('DELETE')
  const [restaurantModalType, setRestaurantModalType] = useState<
    'CREATE' | 'UPDATE'
  >('CREATE')

  const [editFunction, setEditFunction] = useState<() => void>(() => () => {})

  const router = useRouter()
  const { data: session } = useSession()
  if (!session || session.user.role !== 'admin') {
    alert('Please login to access this page')
    router.push('/admin/auth')
    return
  }

  const handleConfirmCreate = async (
    requestBody: RestaurantRequestBody,
    token: string
  ) => {
    try {
      await RestaurantService.createRestaurant(requestBody, token)
    } catch (error) {
      console.log(error)
    }
  }

  const handleConfirmEdit = async (
    restaurantId: string,
    request: RestaurantRequestBody,
    token: string
  ) => {
    try {
      await RestaurantService.editRestaurantById(restaurantId, request, token)
    } catch (error) {
      console.log(error)
    }
  }

  const handleConfirmDelete = async (restaurantId: string, token: string) => {
    try {
      await RestaurantService.deleteRestaurantById(restaurantId, token)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchRestaurantList = async () => {
      const restaurants = await RestaurantService.getAllRestaurants()
      const restaurantListWithFlag = restaurants.map((restaurant) => ({
        ...restaurant,
        isShow: true,
      }))
      setRestaurantList(restaurantListWithFlag)
    }
    fetchRestaurantList()
  }, [setRestaurantList, RestaurantService.getAllRestaurants])

  useEffect(() => {
    if (triggerSearch) {
      const filteredRestaurantList = restaurantList.map((restaurant) => {
        const isMatch =
          restaurant.name.includes(searchInput) ||
          restaurant.foodtype.includes(searchInput) ||
          restaurant.address.includes(searchInput) ||
          restaurant.province.includes(searchInput) ||
          restaurant.postalcode.includes(searchInput) ||
          restaurant.tel.includes(searchInput) ||
          restaurant.id?.includes(searchInput)
        return {
          ...restaurant,
          isShow: isMatch,
        } as RestaurantWithFlag
      })
      setRestaurantList(filteredRestaurantList)
    }
  }, [triggerSearch, searchInput, restaurantList])

  useEffect(() => {
    if (triggerSearch) {
      setTimeout(() => setTriggerSearch(false), 1000)
    }
  }, [triggerSearch, setTriggerSearch])

  return (
    <main className="flex w-full justify-center pb-24">
      <div className="flex flex-col gap-4 items-center w-[68%] pt-9">
        <PageTopicText label="Restaurant Management" />
        <div className="flex justify-between w-full">
          <div className="flex flex-row gap-2 items-center w-full">
            <div className="w-[95%]">
              <InputFieldWithOutLabel
                name={'search'}
                placeholder="Search Your Restaurant"
                onChange={(value) => setSearchInput(value)}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setTriggerSearch(true)}
            >
              <SearchIcon />
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setRestaurantModalType('CREATE')
              setIsShowRestaurantModal(true)
            }}
          >
            <AddIcon />
          </div>
        </div>
        <div
          className="flex flex-col gap-4 py-4 bg-gray-100 min-h-[350px] w-full rounded-xl
          items-center
        "
        >
          {restaurantList.map((restaurant) => {
            return (
              restaurant.isShow && (
                <RestaurantCard
                  name={restaurant.name}
                  id={restaurant.id ?? ''}
                  foodType={restaurant.foodtype}
                  address={restaurant.address}
                  province={restaurant.province}
                  postalCode={restaurant.postalcode}
                  tel={restaurant.tel}
                  picture={restaurant.picture}
                  onFocus={() =>
                    setRestaurantFocus(restaurant as RestaurantInformation)
                  }
                  handleEdit={() => {
                    setRestaurantModalType('UPDATE')
                    setIsShowRestaurantModal(true)
                  }}
                  handleDelete={() => {
                    setWarningType('DELETE')
                    setIsShowWarningModal(true)
                  }}
                />
              )
            )
          })}
        </div>
      </div>
      <RestaurantModal
        isVisible={isShowRestaurantModal}
        modalType={restaurantModalType}
        defaultName={restaurantFocus.name}
        defaultFoodType={restaurantFocus.foodtype}
        defaultAddress={restaurantFocus.address}
        defaultProvince={restaurantFocus.province}
        defaultPostalCode={restaurantFocus.postalcode}
        defaultTelephone={restaurantFocus.tel}
        defaultImageUrl={restaurantFocus.picture}
        onClose={() => setIsShowRestaurantModal(false)}
        onConfirm={async function ({
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
        }) {
          if (restaurantModalType === 'UPDATE') {
            setEditFunction(() => async () => {
              await handleConfirmEdit(
                restaurantFocus.id ?? '',
                {
                  name,
                  address,
                  foodtype: foodType,
                  province,
                  postalcode: postalCode,
                  tel: telephone,
                  picture: imageUrl,
                },
                session.user.token
              )
              console.log('awaited')
            })
            setWarningType('UPDATE')
            setIsShowWarningModal(true)
          } else if (restaurantModalType === 'CREATE') {
            await handleConfirmCreate(
              {
                name,
                address,
                foodtype: foodType,
                province,
                postalcode: postalCode,
                tel: telephone,
                picture: imageUrl,
              },
              session.user.token
            )
            setSuccessType('CREATE')
            setRestaurantFocus({
              name,
              address,
              foodtype: foodType,
              province,
              postalcode: postalCode,
              tel: telephone,
              picture: imageUrl,
            })
            setIsShowSuccessModal(true)
            setIsShowRestaurantModal(false)
          }
        }}
      />
      <RestaurantWarningModal
        type={warningType}
        isVisible={isShowWarningModal}
        onDismiss={() => setIsShowWarningModal(false)}
        onConfirm={async () => {
          if (warningType === 'UPDATE') {
            await editFunction()
            setIsShowWarningModal(false)
            setSuccessType('UPDATE')
            setIsShowSuccessModal(true)
          } else if (warningType === 'DELETE') {
            await handleConfirmDelete(
              restaurantFocus.id ?? '',
              session.user.token
            )
            setIsShowWarningModal(false)
            setSuccessType('DELETE')
            setIsShowSuccessModal(true)
          }
        }}
        restaurantName={restaurantFocus.name}
      />
      <RestaurantSuccessModal
        type={successType}
        isVisible={isShowSuccessModal}
        onClose={() => {
          setIsShowSuccessModal(false)
          window.location.reload()
        }}
        restaurantName={restaurantFocus.name}
      />
    </main>
  )
}
