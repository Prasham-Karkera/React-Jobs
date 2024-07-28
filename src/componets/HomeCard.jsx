import React from 'react'
import Card from './Card'

const HomeCard = () => {
  return (
    <section className="bg-blue-100 py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">


            <Card bg= 'bg-green-200'>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Jobs
            </a>
            </Card>




          <Card bg= 'bg-orange-200'>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-600"
            >
              Add Job
            </a>
         </Card>

        </div>
      </div>
    </section>
  )
}

export default HomeCard