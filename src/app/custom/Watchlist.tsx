import React from 'react'
import {watchlist} from '../data/data'
import { FaAngleDown } from 'react-icons/fa'

export default function Watchlist() {
  return (
    <div className='w-full text-sm px-2 border-b border-gray-300'>
            {
              watchlist.map((val, idx) => (
                <div className='flex justify-between items-center border-t border-gray-300 py-2' key={idx}>
                  <h4 className={val.isDown ? "text-red-500" : "text-green-500"}>{val.name}</h4>
                  <div className='flex gap-2 items-center'>
                    <p>{val.percent}</p>
                    <FaAngleDown />
                    <p>{val.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
  )
}
