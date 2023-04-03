const express = require('express')
const controller = require('./controller')
const router = express.Router()


router.get('/',controller.getstudents)
router.get ('/:id', controller.getstudentsbyid)
router.post('/', controller.addstudent)
router.delete('/:id',controller.removestudent)
router.put('/:id',controller.updatestudent)

module.exports= router;