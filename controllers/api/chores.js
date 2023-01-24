const Chore = require('../../models/chore')

module.exports = {
    index,
    create
}

async function create(req, res) {
    try {
        req.body.duration = parseInt(req.body.duration)
        req.body.frequency = parseInt(req.body.frequency)
        const chore = await Chore.create(req.body)
        res.status(200).json(chore)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function index(req, res) {
    try {
        const chore = await Chore.find({})
        res.status(200).json(chore)
    } catch (err) {
        res.status(400).json(err)
    }
}