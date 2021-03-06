var mongoose = require('mongoose');

// Article Schema

var Tweet = mongoose.Schema({
  created_at: {type: Number},
  geojson:{
      type: { type: String },
      properties: {

      },
      geometry: {
        type: { type: String },
        //lon-lat-coordinates
        coordinates: {type: [Number]}
      }
    },
  embeddedTweet: {type: String},
  text: {type: String},
  id_str: {type: String, unique: true}
});

var Tweet = module.exports = mongoose.model('Tweet', Tweet);
