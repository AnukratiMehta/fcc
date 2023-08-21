import React, { useState, useEffect } from 'react';
import { MdOutlineDevices } from 'react-icons/md';

export default function Courses() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    // Fetch course data from your API and update state
    fetch('http://localhost:5001/courses/api/courses') // Update the URL as needed
      .then(response => response.json())
      .then(data => setCourseData(data))
      .catch(error => console.error('Error fetching course data:', error));
  }, []);

  return (
    <div>
      <div className="h-screen bg-bg flex flex-col items-center justify-center">
        <div>
          <div className="flex flex-col text-black text-4xl font-bold">
            <h1 className="px-5">Welcome to freeCodeCamp.org</h1>
          </div>
          <div className="py-5 mt-3">
            <p className="px-4">
              "I've not failed. I've just found 10,000 ways that won't work."
            </p>
            <p className="px-4 py-2 italic text-center">- Thomas A. Edison</p>
          </div>
          <div className="text-center mt-5">
            {courseData.map((course, index) => (
              <div
                key={index}
                className="bg-course mb-3 min-h-[80px] text-xl text-bold border border-[3px] border-black flex items-center px-5 hover:text-course hover:bg-header cursor-pointer "
              >
                <MdOutlineDevices className="text-6xl pr-5" />
                <div className='w-full flex justify-between'>
                  <div>{course.title}</div>
                  <div>{course.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
