const { Schema , model } = require('mongoose')

const sightingSchema = new Schema({
    country:{
        type: String,
      },

    place: {
        type: String,
      },
    
      date: {
        type: Date,
      },
    
      time: {
        type: String,
      },

  //     location: {
  //       type: "Point",
  //       coordinates: [, ]
  // },
      // latitud: {
      //   type: String,
      // },

      // longitud: {
      //   type: String,
      // },

      altitud: {
        type: String,
      },

      name: {
        type: String,
      },

      scientistname: {
        type: String,
      },

      type: {
        type: String,
      },

      observador: {
        type: String,
      },

      other: {
        type: String,
      },

      isActive: {
        type: Boolean,
        default: true
    }


})

module.exports = model('Sighting' , sightingSchema)