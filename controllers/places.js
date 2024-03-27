const router = require('express').Router()


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://www.surrealcms.com/uploads/placekitten-selection.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://www.surrealcms.com/uploads/placekitten-selection.jpg'
      }]

    res.render('places/index', { places })
})

router.get('/', (req, res) => {
  res.send('GET /places')
})

module.exports = router