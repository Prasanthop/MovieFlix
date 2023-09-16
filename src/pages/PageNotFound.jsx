import React from 'react'
import  PageNotFoundjpg  from '../assets/404.jpg'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white mb-10'>404, Oops!</p>
          <div className='max-w-lg'>
          <img className='rounded'  src={PageNotFoundjpg} alt="404 Page not found" />
          </div>
         <div className='flex justify-center my-4'>
          <Link to="/">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to MovieFlix</button>

          </Link>
         </div>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound