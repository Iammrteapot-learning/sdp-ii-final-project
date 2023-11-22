import { RestaurantInformation } from '../RestaurantService'

export default function searchFilter({
  res_list,
  searchWord,
}: {
  res_list: RestaurantInformation[] | undefined
  searchWord: string
}) {
  // Check if res_list is defined and is an array
  if (!Array.isArray(res_list)) {
    console.error('res_list is not defined or not an array')
    return []
  }

  if (searchWord === '') {
    return res_list
  }

  const lowercasedSearchWord = searchWord.toLowerCase() // Convert search word to lowercase

  const result = res_list.filter(
    (res) =>
      res.name.toLowerCase().includes(lowercasedSearchWord) ||
      res.province.toLowerCase().includes(lowercasedSearchWord) ||
      res.foodtype.toLowerCase().includes(lowercasedSearchWord)
  )

  return result
}
