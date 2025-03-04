import React from 'react'

const Filter = ({sort}) => {
  return(
    <div>
      <select value={sort()} onChange={(ev) => sort(ev.target.value)}>
      <option value="author">Author</option>
      <option value="title">Title</option>
      <option value="id">None</option>
      </select>
    </div>
  )
}

export default Filter
