export default function ShowUserInfoPanel({
  username,
  tel,
}: {
  username: string
  tel: string
}) {
  return (
    <div className="w-full my-6 flex flex-col items-center justify-center gap-4">
      <div>Name : {username}</div>
      <div>Tel : {tel}</div>
    </div>
  )
}
