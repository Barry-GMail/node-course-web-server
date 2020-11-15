const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmZpcm1hbiIsImEiOiJja2g3bWZtZ2IwNXJqMnRxcTJmZmhzMjJ3In0.kvzzJvrSEJ8KCM76x49wNg&limit=1'
  request({ url, json: true}, (error, {error:respError, body}) => {
    if(error) {
      console.log('error')
      callback('Unable to connect to location services!', undefined)
    } else if (body.features == undefined){
      console.log('response error')
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode