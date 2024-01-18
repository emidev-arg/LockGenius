import React, { useEffect } from 'react'

const PageNotFound = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:5173/'
  },[])
  return (
    <div></div>
  )
}

export default PageNotFound