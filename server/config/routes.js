const bp = require('body-parser')
const api = require('./controller')

function router(app){
    
    app.use(bp.json())

    app.get('/api/pets', api.allPets)

    app.get('/api/pets/:id', api.petById)

    app.patch('/api/pets/:id', api.updatePetById)

    app.delete('/api/pets/:id', api.deletePetById)

    app.post('/api/pets', api.createPet)

}

module.exports = router