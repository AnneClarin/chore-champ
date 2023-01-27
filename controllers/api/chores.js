const Chore = require('../../models/chore')

module.exports = {
    index,
    create,
    update,
    delete: deleteChore
}

async function index(req, res) {
    try {
        const chore = await Chore.find({})
        res.status(200).json(chore)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.duration = parseInt(req.body.duration)
        const chore = await Chore.create(req.body)
        console.log("hit chores-controller")
        res.status(200).json(chore)
    } catch (err) {
        res.status(400).json(err)
    }
}


async function update(req, res) {
    try {
        const chore = await Chore.findById(req.params.id)
        chore.completed = !chore.completed
        await chore.save()
        res.status(200).json(chore)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteChore(req, res) {
    try {
        const deletedChore = await Chore.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedChore)
    } catch (err) {
        res.status(400).json(err)
    }
}