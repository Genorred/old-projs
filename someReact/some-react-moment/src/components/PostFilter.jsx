import React from 'react'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/mySelect'

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput value={filter.query} onChange={(e) => {
        setFilter({ ...filter, query: e.target.value })
      }}>
      </MyInput>
      <MySelect value={filter.sort} onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })} defaultValue='sorting' option={
        [
          {
            value: 'title', name: 'sort by name'
          },
          {
            value: 'body', name: 'sort by description'
          }
        ]
      }>
      </MySelect>
    </div>
  )
}

export default PostFilter
