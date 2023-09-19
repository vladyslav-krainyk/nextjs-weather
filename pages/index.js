import Head from 'next/head'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import Image from 'next/image';
import Weather from '@/components/Weather';
import Loader from '@/components/Loader';

const API = 'e5c644b3ee19d1f8adfb9d6bf13fbf3d';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`;
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      axios.get(URL)
        .then(response => {
          setWeather(response.data);
          setError(false)
        })
        .catch(error => {
          setErrorMessage(error.response.statusText)
          setError(true)
        })
        .finally(() => {
          setCity('');
          setLoading(false);
        });
    }, 500);
  }

  const handleChangeInput = (e) => {
    setCity(e.target.value)
  }

  return (
    <div className='absolute top-0 left-0 bottom-0 right-0'>
      <Head>
        <title>Weather - Next App</title>
        <meta name='description' content='Weather Next App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* OVERLAY */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />

      {/* BACKGROUND IMAGE */}
      <Image
        src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2575&q=80'
        className='object-cover'
        fill
        alt='background'
      />

      {/* SEARCH */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form
          onSubmit={fetchWeather}
          className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
        >
          <div>
            <input
              value={city}
              onChange={handleChangeInput}
              type="text"
              placeholder='Search yours city'
              className='outline-none bg-transparent border-none text-white text-2xl placeholder:text-white'
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* WEATHER */}

      {error && !loading &&
        <div className='relative mt-10 m-auto text-center text-2xl text-red-500 p-8 rounded-xl max-w-[500px] bg-black/50'>{errorMessage}</div>
      }

      {loading && !!error ?
        <Loader /> :
        (
          weather.main && <Weather data={weather} />
        )
      }
    </div>
  )
}
