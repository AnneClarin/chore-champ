import * as choresAPI from './chores-api'

export async function addChore(choreData) {
    const chore = await choresAPI.addChore(choreData)
    return chore
}