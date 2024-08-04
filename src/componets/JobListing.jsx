import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  const colours = ['blue','red','orange']
  if (!showFullDescription) {
    description = description.substring(0, 100) + '...';
  }

  return (
    <div className="bg-blue-50 rounded-xl shadow-md relative transition-transform duration-300 hover:scale-105">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5 transition-all duration-300">
          {description}
        </div>

        <button
          onClick={() => setShowFullDescription((prevstate) => !prevstate)}
          className="text-indigo-500 mb-5 hover:text-indigo-600 transition-colors duration-300"
        >
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
