const express = require('express');
const router = express.Router();
const Course = require('../models/Course'); // Import your Course model
const mockCourseData = require('../mockData'); // Import your mock data

// Add mock data to the collection
router.post('/add-mock-data', async (req, res) => {
  try {
    await Course.insertMany(mockCourseData); // Use mockCourseData instead of mockCourseTitles
    res.json({ message: 'Mock data inserted into Course collection' });
  } catch (error) {
    console.error('Error inserting mock data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Fetch course data from the collection
router.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find({}, 'title duration'); // Fetch both title and duration fields
    res.json(courses); // Return the complete course data
  } catch (error) {
    console.error('Error fetching course data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
