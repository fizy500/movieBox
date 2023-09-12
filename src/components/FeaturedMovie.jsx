import { useState } from "react";
import MoviePoster from "../assets/MoviePoster.png";
import Rating from "./Rating";

export default function FeaturedMovie() {
  const [love, setLove] = useState(true);
  return (
    <div className='h-[23.1rem] w-[15.6rem]'>
      <div className='relative'>
        <img
          src={MoviePoster}
          alt='movie'
          className='h-[23.1rem] w-[15.6rem]'
        />
        <p className='text-gray-900 text-xs font-bold bg-[#F3F4F6] opacity-[50%] py-1 px-2 rounded-xl absolute top-6 left-2'>
          TV SERIES
        </p>
        <div>
          <div className='flex justify-center items-center bg-[#F3F4F6] w-8 h-8 opacity-[50%] rounded-[50%] absolute top-6 right-2'>
            <svg
              width='16'
              height='14'
              viewBox='0 0 16 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => setLove(!love)}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.17157 1.48284C2.73367 -0.0381453 5.26633 -0.0381453 6.82842 1.48284L7.99999 2.62359L9.17157 1.48284C10.7337 -0.0381453 13.2663 -0.0381453 14.8284 1.48284C16.3905 3.00383 16.3905 5.46984 14.8284 6.99083L7.99999 13.6396L1.17157 6.99083C-0.390524 5.46984 -0.390524 3.00383 1.17157 1.48284Z'
                // fill='#D1D5DB'
                className={`${love ? "fill-[#D1D5DB]" : "fill-rose-700"}`}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-3'>
        <p className='text-xs text-gray-400 font-bold'>USA, 2016 - Current</p>
        <p className='text-gray-900 font-bold text-lg'>Stranger Things</p>
        <Rating />
        <p className='text-xs text-gray-400 font-bold'>
          Action, Adventure, Horror
        </p>
      </div>
    </div>
  );
}
