let schoolId = 1
async function getScore() {
    let response = await fetch(`https://homicide-hog-default-rtdb.asia-southeast1.firebasedatabase.app/score/${schoolId}.json`)
    let data = await response.json()
    return data
}
async function insertScore() {
    let data = await getScore()
    let score = document.getElementsByClassName('score_box')[0]
    score.innerText = Object.keys(data).length
}
async function postScore() {
    let now = new Date()
    let response = await fetch(`https://homicide-hog-default-rtdb.asia-southeast1.firebasedatabase.app/score/${schoolId}.json`, {
        method: 'POST',
        body: JSON.stringify(now),
        headers: {
            'Content-type': 'application/json'
        }
    })
    let data = await response.json()
    return data
}
insertScore()