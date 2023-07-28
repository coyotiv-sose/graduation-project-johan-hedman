const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

const Cat = mongoose.model('Cat', { name: String, free: Boolean })

const kitty = new Cat({ name: 'Pixel', free: true })
kitty.save().then(() => console.log('meow'))
