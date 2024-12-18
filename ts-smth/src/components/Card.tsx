import React from 'react'
interface cardItem {
    width?: string,
    height?: string
  }
const Card: React.FC<cardItem> = ({width, height, children}) => {
  return (
    <div style={{width, height, border: '1px solid black'}}>
      {children}
    </div>
  )
}

export default Card
