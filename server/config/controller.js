const ModelObj = require('../model/model')
const pet = ModelObj.pet

function allPets (req, res) {
    pet.find({})
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}

function petById (req, res) {
    console.log(req.params.id)
    pet.findById(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function updatePetById (req, res) {
    pet.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        context: "query"
    })
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}

function createPet (req, res) {
    pet.create(req.body)
        .then(data => res.json(data))
        .catch(er => res.json(er))
}


function deletePetById (req, res) {
    pet
    .findByIdAndRemove(req.params.id)
    .then(dt => res.json(dt))
    .catch(er => res.json(er))
}


module.exports = {
    allPets : allPets,
    petById : petById,
    updatePetById : updatePetById,
    createPet : createPet,
    deletePetById : deletePetById,
}