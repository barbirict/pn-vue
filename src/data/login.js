export default function loginAttempt(data){
   let success=false;
   let baza = JSON.parse(localStorage.getItem('userbase'));
    if(baza === null || data.username === null ||data.pass === null){
        alert("User does not exist!!");
    }
    else for(let i = 0; i < baza.length; i++){
        //alert(baza[i].username)
        if(data.username === baza[i].username && data.pass === baza[i].pass){
            localStorage.setItem('curUsr', JSON.stringify(baza[i]));
            success=true;
            break;
        }
    }
    if(!success) alert("User does not exist or the password is incorrect!!");
    else{
        alert("logged in! redirecting to main page");
        window.location.href = "/"

    }

}