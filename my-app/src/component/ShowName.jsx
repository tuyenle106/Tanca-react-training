import React from 'react'
import { useState } from 'react'

const ShowName = () => {
  const [name, setName] = useState("");
  
  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter your name"
      />

      <div>Tên bạn là: {name}</div>
    </>
  );
}

export default ShowName