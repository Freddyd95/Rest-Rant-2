const db = require('../models')

//To use await, we need an async function.
async function seed() {
    //Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //Creating a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished One',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)

    await place.save()

    process.exit()
}

seed()