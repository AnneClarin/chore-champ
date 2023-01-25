import * as choresAPI from './chores-api'

export async function addChore(choreData) {
    const chore = await choresAPI.addChore(choreData)
    return chore
}

export async function changeChore(choreData) {
    const chore = await choresAPI.changeChore(choreData)
    console.log(chore)
    return chore
}