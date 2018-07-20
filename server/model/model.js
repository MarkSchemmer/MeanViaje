const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

let skillSchema = new mongoose.Schema({
    skill_1 : {
        type : String 
    },
    skill_2 : {
        type : String 
    },
    skill_3 : {
        type : String 
    }
}, {timestamps : true })

let petSchema = new mongoose.Schema({
    name : { 
            type : String, 
            required : [true, 'pet name cannot be left blank!'],
            minlength : [3, 'pet must have more than 4 chars!'],
            unique : true 
          },
    petType : { 
        type : String,
        required : [true, 'Please input a pet type'],
        minlength : [3, 'pet type must be more than 3 chars']
     },
    desc : { 
        type : String,
        required : [true, 'Description cannot be blank'],
        minlength : [true, 'Description must at least be 3 characters!'] 
    }, 
    likes : { 
        type : Number,
        default : 0 
    },
    skills : [skillSchema]
}, {timestamps : true })

petSchema.plugin(uniqueValidator, {message : 'Name must be unique'})
mongoose.model('skill', skillSchema)
mongoose.model('pet', petSchema)

let skill = mongoose.model('skill')
let pet = mongoose.model('pet')

module.exports = {
    petSchema : petSchema,
    pet : pet
}