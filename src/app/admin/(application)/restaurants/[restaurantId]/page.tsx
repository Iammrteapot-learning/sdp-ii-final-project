export default function AuthRestaurantDetailPage({
  params,
}: {
  params: { restaurantId: string }
}) {
  return (
    <div>
      AUTH RESERVATIONS OF RESTAURANT ID:{params.restaurantId} DETAIL PAGE
    </div>
  )
}
