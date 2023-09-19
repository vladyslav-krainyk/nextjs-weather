import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='relative flex justify-center mt-16 z-10'>
      <RotatingLines
        strokeColor="white"
        strokeWidth="3"
        animationDuration="0.95"
        width="35"
        visible={true}
      />
    </div>
  )
}

export default Loader