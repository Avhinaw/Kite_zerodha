import React from 'react'
import Watchlist from '../custom/Watchlist'
export default function Dashboard() {
  return (
    <div className='flex w-full h-screen'>
      <div className='w-[24.4%] border-r border-gray-300'>
        <div className='w-full h-full'>
          <input type="text" className='w-full outline-none' placeholder='Search eg: infy, bse, nifty fut weekly, gold mcx'/>
          <Watchlist />
        </div>
      </div>
      <div className='w-[62%]  px-10 py-10'>
        <h2 className='text-2xl text-gray-700 border-b border-gray-300 p-5'>Hi, User!</h2>
        <div className='py-5 space-y-8'>
          <h4 className='text-lg'>Equity</h4>
          <div className='flex gap-5'>
            <div className='space-y-4 border-r border-gray-300 w-1/3'>
              <h4 className='text-xl'>3.74K</h4>
              <p className='text-sm'>Margin available</p>
            </div>
            <div className='space-y-3 text-sm'>
              <p>Margins used <span className='text-black'>0</span></p>
              <p>Opening balance <span className='text-black'>0</span></p>
            </div>  
          </div>
          <h4 className='text-xl'>Holdings(13)</h4>
          <div className='flex gap-5 border-b pb-8 border-gray-300'>
          <div className='space-y-4 border-r border-gray-300 w-1/3'>
              <h4 className='text-xl'>1.55K <sub className='text-sm'>+5.20%</sub></h4>
              <p className='text-sm'>P&L</p>
          </div>
          <div className='space-y-3 text-sm'>
              <p>Current Value <span className='text-black'>31.43k</span></p>
              <p>Investment <span className='text-black'>29.88k</span></p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
