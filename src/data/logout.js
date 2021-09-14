export default function logoutAttempt(){
    localStorage.setItem("curUsr", null);
    localStorage.removeItem("basket", null);
    localStorage.removeItem("userOrders", null);
    alert("logged out!");
    window.location.href = "/"
}