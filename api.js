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
let schoolName = qs.schoolName
name.innerText=`${schoolName}`
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