
export default function attemptRegister(data){
    let baza = [];
    if(localStorage.getItem('userbase') != null) baza = JSON.parse(localStorage.getItem('userbase'));
    alert(JSON.stringify(data));
    if(data.username === null || data.name === null || data.pass === null || data.email === null) alert("error during registration! data missing!");
    else {
        alert("tu")
        baza.push(data);
        alert("Users  " + JSON.stringify(baza));
        localStorage.setItem('userbase', JSON.stringify(baza));
    }
}

