function getQueryStringObject() {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}
let name = document.getElementsByClassName('school_name')[0]
let qs = getQueryStringObject()
let schoolId = qs.id
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

async function getSortedScore() {
    let response = await fetch(`https://homicide-hog-default-rtdb.asia-southeast1.firebasedatabase.app/score.json`)
    let data = await response.json()
    let scores = []
    for (let key in data) {
        let jsonData = TestFile.DATA.find(element => element.sd_schul_code===key)
        scores.push({id: key, name: jsonData.schul_nm, score: Object.keys(data[key]).length})
    }
    let sortedScores = scores.sort((a,b) => b.score - a.score)
    return sortedScores
}
async function showRank() {
    // 전체 랭크 표시
    let scores = await getSortedScore()
    let rankBox = document.getElementsByClassName('rank_box')[0]
    let num = 1
    for (let score of scores) {
        rankBox.insertAdjacentHTML('beforeend', `
            <p>${num}등 ${score.name}: ${score.score}</p>
        `)
        num++
    }
    // 우리 학교 랭크 표시
    // let jsonData = TestFile.DATA.find(element => element.sd_schul_code===schoolId)
    let rank = scores.findIndex(element => element.id === schoolId)
    let name = document.getElementsByClassName('school_name')[0]
    name.innerText = `${rank+1}등 ${qs.schoolName}`
}
showRank()
