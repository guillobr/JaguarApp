const { Router } = require('express')
const router = Router()

const sighting = require('./sighting')


router.use('/sighting', sighting)


module.exports = router
