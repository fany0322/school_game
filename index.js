function addSchoolList(){
    let schoolList = []
    const data = TestFile.DATA
    for (let i=0; i < data.length; i++){
        schoolList.push(data[i].schul_nm)
    }
    return schoolList
}

const schoolList = addSchoolList()

function search() {
    let search = document.getElementById('search')
    
    //1. search에 입력한 값이 'schoolList = []'에 있는지 찾아본다.
    let isResult = false
    let schoolNames = []
    for (let i=0; i<schoolList.length; i++){
        if(schoolList[i].includes(search.value) === true){
            isResult = true
            schoolNames.push(schoolList[i])
        }
    }

    if (isResult === true) {
        let searchList = document.getElementById('search-list')
        searchList.innerHTML = ""
        for (let i=0; i<schoolNames.length; i++){
            searchList.insertAdjacentHTML('beforeEnd', `
            <a class="chainword" href="game.html?schoolName=${schoolNames[i]}">${schoolNames[i]}</div>
        `)
        }

    } else if (isResult === false) {
        alert('당신이 입력한 값은 목록에 없습니다')
    }
}
    //2. 만일에, input 태그에 입력한 값이 찾아지면 그 값을 화면에 띄우고
    //3. 없다면, 띄우지 않는다. (예시:당신이 검색한 값은 목록에 있지 않습니다.)

