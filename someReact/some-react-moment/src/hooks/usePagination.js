import { useState, useMemo } from "react"

export default function usePagination(totalPages) {
  console.log(totalPages)
  const [pagesArray, setPagesArray] = useState([])
  useMemo(() => {
    let array = []
    for (let i = 0; i < totalPages; i++) {
      array.push(i + 1)
    }
    setPagesArray(array)

  }, [totalPages])
  return pagesArray
}
