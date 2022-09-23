const express = require('express')
const router = express.Router()
const student = require('../models/student')


router.get('/', async (req, res) => {
    try {
        const students = await student.find()
        res.json(students)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const student = await student.findById(req.params.id)
        res.json(student)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const student = await Model.findByIdAndDelete(req.params.id)
        res.send(`Document with ${student.name} has been deleted..`)

    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async (req, res) => {
    try {
        const st = new student({
            name: req.body.name,
            grade: req.body.grade
        })


        const a1 = await st.save()
        res.json(a1)
    } catch (err) {
        console.log(err)
        res.send('Error')
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const student = await student.findById(req.params.id)
        student.name = req.body.name
        student.grade = req.body.grade
        const a1 = await student.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router