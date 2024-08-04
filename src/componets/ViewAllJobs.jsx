import React from 'react'
import { Link } from 'react-router-dom'

export const ViewAllJobs = () => {
  return (
    
    <section className=" m-auto max-w-lg my-10 ">
      <Link 
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-3xl hover:bg-gray-700"
        >View All Jobs</Link>
    </section>
  )
}
