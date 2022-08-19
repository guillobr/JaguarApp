const { Router } = require('express')

const Sighting = require('../model/sighting')


const router = Router()


//GET
  router.get('/', async function (req, res) {
    try {
      const sighting = await Sighting.find({})
      return res.json(sighting)
    } catch (error) {
      console.log('FALLO GET sighting', error)
    }
  })



  //GET ID
  router.get('/:id', async function (req, res) {
    const { id } = req.params
    try {
      if (id.length !== 24) throw new Error('The id have 24 characters')
      const sighting = await Sighting.findById(id)
      if (sighting === null) throw new Error('Sighting not found')
      res.status(200).json(sighting)
    } catch (err) {
      res.status(404).send(err.message)
    }
  })




  //ADD 
router.post('/addSighting', async function (req, res) {
  const {
    country,
    location,
    date,
    time,
    latitud,
    longitud,
    altitud,
    name,
    scientistname,
    type,
    observador,
    other
  } = req.body
  

  try {
    
    const newSighting = new Sighting({
        country,
        location,
        date,
        time,
        latitud,
        longitud,
        altitud,
        name,
        scientistname,
        type,
        observador,
        other
    })
    await newSighting.save()

    const saveSighting = await Sighting.find({ oservador: observador })
    
   

    return res.json(newSighting)

  } catch (err) {
    console.log('FALLO Post sighting', err.message)
  }
})



//PUT 
router.put('/update/:id', async (req, res) => {
  const { id } = req.params
  try {
    if (Object.keys(req.body).length === 0) throw new Error('Send propertys')
    const sighting = await Sighting.findByIdAndUpdate(id, req.body, { new: 1 })
    res.json(sighting)
  } catch (err) {
    res.status(404).send(err.message)
  }
})



//DELETE
  router.delete('/deleteSighting/:id', async (req, res) => {
    const { id } = req.params
    try {
      await Sighting.deleteOne({ _id: id })
      
  
      res.status(204).send()
    } catch {
      res.status(404)
      res.send({ error: 'ESESight NO EXISTE' })
    }
  })


//HIDE
  router.post('/hideSighting/:id', async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        await Sighting.findByIdAndUpdate(id, { isActive: false })
        res.send('The sighting is hidden now')
      }
    } catch (err) {
      res.status(404).send(err.message)
    }
  })
  


  //SHOW
  router.post('/showSighting/:id', async (req, res) => {
    const { id } = req.params
    try {
      if (id) {
        await Sighting.findByIdAndUpdate(id, { isActive: true })
        res.send('The sigting can be seen now')
      }
    } catch (err) {
      res.status(404).send(err.message)
    }
  })

module.exports = router