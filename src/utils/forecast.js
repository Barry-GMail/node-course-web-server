const request = require('request')

const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=5efc4ae25ec71b2869f13e89838e50a8&query=' + lat + ',' + long //+ '&units=f'
  console.log(url)
  request({ url, json: true }, (error, {error:respError, body}) => {
    if(error) {
      callback('Unable to connect to weather service.', undefined)
    } else if (respError) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. Local time at time of query: " + body.location.localtime)
    }
  })
}

module.exports = forecast
