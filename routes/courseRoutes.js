const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/courses', courseController.createCourse);

router.get('/courses/:id', courseController.getCourse);

router.get('/courses', courseController.getCourses);

router.put('/courses/:id', courseController.updateCourse);

router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
