import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
<footer className="p-4 bg-white shadow  dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; {new Date().getFullYear()} <Link to="/" className="hover:underline">MovieFlick</Link></span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/prasanthop/" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/prasanth-prasannan-b1a93249/" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">Linkedin</a>
        </li>
        <li>
            <a href="https://www.facebook.com/prasanthop/" target='_blank' rel='noreferrer' className="mr-4 hover:underline md:mr-6">Facebook</a>
        </li>
        <li>
            <a href="https://www.GitHub.com/prasanthop/" target='_blank' rel='noreferrer' className="hover:underline">GitHub</a>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer