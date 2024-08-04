import React from 'react'
import JobListing from './JobListing';
import { useEffect, useState } from 'react';
import Loading from './Loading';

const JobListings = ({isHome = false}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchjobs();
  },[])


  const jobListings = isHome ? jobs.slice(0,3) : jobs;
  const bgClass = isHome ? "bg-blue-100 px-4 py-10" : "bg-blue-200 px-4 py-10"

  return (
    <section className={bgClass}>
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Browse Jobs' : 'Recent Jobs'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      


      {loading ? (
          <Loading loading={loading}/>
        ) :
        (
          <>
          {jobListings.map((job) => (
            <JobListing key={job.id} job={job}/>
          ))}
          </>
        )
        }
        
      </div>
    </div>
  </section>
  )
}

export default JobListings