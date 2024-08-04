import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-yellow-500"> 
                    <FaExclamationTriangle className='inline-block text-8xl mr-10 mb-5'/>
                    404
                    </h1>
                <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 text-lg text-white bg-blue-500 rounded hover:bg-blue-600">
                    Go to Homepage
                </Link>
            </div>
    </div>
  )
}

export default PageNotFound