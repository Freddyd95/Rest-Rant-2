const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-Restaurant.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cafe.jpg'
      }]

    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/', (req, res) => {
  res.send('GET /places')
})

module.exports = router