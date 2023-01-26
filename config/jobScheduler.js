const schedule = require('node-schedule')
const Chore = require('../models/chore')


const cronEquivalent = { Daily: '0 0 * * *', Weekly: '0 0 * * ?', Monthly: '0 0 ? * *'}

async function getChores () {
    try {
        const chores = await Chore.find({})
        chores.forEach(chore => {
            if (chore.frequency === "Weekly") {
                cronEquivalent[chore.frequency] = `0 0 * * ${new Date(chore.createdAt).getDay()}`
            } else if (chore.frequency === "Monthly") {
                cronEquivalent[chore.frequency] = `0 0 ${new Date(chore.createdAt).getDate()} * *`
            }
            if (chore.completed === true) {
                schedule.scheduleJob(cronEquivalent[chore.frequency], () => {
                    chore.completed = false
                    chore.save()
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
}

const someDate = new Date(Date.now() + 5000)
console.log(someDate)

schedule.scheduleJob('0 0 * * *', () => {
    getChores()
})