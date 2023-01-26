import sendRequest from "./send-request";
const BASE_URL = '/api/chores';

export async function addChore(choreData) {
    return sendRequest(BASE_URL, 'POST', choreData)
};

export function getAll() {
    return sendRequest(BASE_URL)
};

export function changeChore(choreData) {
    return sendRequest(`${BASE_URL}/${choreData._id}`, 'PUT', choreData)
};

export function deleteChore(choreData) {
    return sendRequest(`${BASE_URL}/${choreData._id}`, 'DELETE')
};