import React from 'react'
import Image from 'next/image'

const Weather = ({ data }) => {
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full m-auto text-gray-300 z-10'>
      <div className='relative flex justify-between items-center pt-12 mb-20'>
        <div className='flex flex-col items-center'>
          <Image
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
            priority={true}
          />
          
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}°C</p>
      </div>
      <div className='bg-black/50 relative p-8 rounded-md'>
        <p className='text-2xl text-center pb-8'>Weather in {data.name}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='text-xl'>Feels like</p>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}°C</p>
          </div>
          <div>
            <p className='text-xl'>Humidity</p>
            <p className='font-bold text-2xl'>{data.main.humidity} %</p>
          </div>
          <div>
            <p className='text-xl'>Winds</p>
            <p className='font-bold text-2xl'>{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather