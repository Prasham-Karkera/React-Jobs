import React from 'react'
import Hero from '../componets/Hero'
import HomeCard from '../componets/HomeCard'
import JobListings from '../componets/JobListings'
import { ViewAllJobs } from '../componets/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs'/>
        <HomeCard/>
        <JobListings/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage