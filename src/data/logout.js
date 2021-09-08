export default function logoutAttempt(){
    localStorage.setItem("curUsr", null);
    localStorage.setItem("cart", null);
    alert("logged out!");
}