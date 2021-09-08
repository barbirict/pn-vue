export default function loginAttempt(data){

   let baza = JSON.parse(localStorage.getItem('userbase'));
    if(baza === null || data.username === null ||data.pass === null){
        alert("User does not exist!!");
    }
    else for(let i = 0; i < baza.length; i++){
        if(data.username === baza[i].username && data.pass === baza[i].pass){
            localStorage.setItem('curUsr', JSON.stringify(baza[i]));
            break;
        }
    }
}