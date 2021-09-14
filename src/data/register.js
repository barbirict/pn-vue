
export default function attemptRegister(data){
    let baza = [];
    let didtrigger=false;
    if(localStorage.getItem('userbase') != null) baza = JSON.parse(localStorage.getItem('userbase'));
    //alert(JSON.stringify(data));
    if(data.username === null || data.name === null || data.pass === null || data.email === null) alert("error during registration! data missing!");
    else {
        for(let i=0; i<baza.length; i++){
            if(baza[i].username === data.username){
                alert("username already in use! try again!");
                didtrigger=true;
                break;
            }
            else if(baza[i].email === data.email){
                alert("email already in use! try again!");
                didtrigger=true;
                break;
            }
        }
        }
    if(didtrigger===false){
        baza.push(data);
        localStorage.setItem('userbase', JSON.stringify(baza));
        alert("Registration succesful, please login !")

    }

}

