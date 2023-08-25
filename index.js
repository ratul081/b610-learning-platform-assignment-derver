const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Courses API Loading')
})
app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/home', (req, res) => {
  const shortenCourse = courses.slice(2) 
  res.send(shortenCourse)
})
app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id
  const selectedCourse = courses.find(course => course._id === id)
  res.send(selectedCourse);
})

app.get('/check_out/:id', (req, res) => {
  const id = req.params.id
  const selectedCourse = courses.find(course => course._id === id)
  res.send(selectedCourse);
})

app.get('/course-categories', (req, res) => {
  res.send(categories)
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id
  if (id == '07') {
    res.send(courses)
  }
  else {
    const selectedCategories = courses.filter(course => course.category_id === id)
    res.send(selectedCategories);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})