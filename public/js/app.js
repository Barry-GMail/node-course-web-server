console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

//messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent = 'Loading.....'
  messageTwo.textContent = ''
  fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOne.textContent = ''
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = ''
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})