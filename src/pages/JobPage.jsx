import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../componets/Loading';
import JobListing from '../componets/JobListing';


const JobPage = () => {
  const {id} = useParams();
  const [job,setJob] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchjob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchjob();
  },[])
  console.log(job);

  return (
   loading ? <Loading loading={loading} /> : <JobListing key={job.id} job={job}/>
  )
}

export default JobPage