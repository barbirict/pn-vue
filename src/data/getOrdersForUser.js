export default function getOrdersForUser(username){
    const curUsr=username;
    let allOrders = [];
    let userOrders = [];
    console.log('tu')
    allOrders=JSON.parse(localStorage.getItem("ordersGlobal"));
    if(allOrders.length > 0){
        console.log('tutu')
        for(let i=0; i<allOrders.length; i++){
            console.log(JSON.parse(allOrders[i]))
            if(allOrders[i].username === curUsr.username){
                userOrders.push(JSON.parse(allOrders[i]))
            }
        }
        console.log(userOrders.length)
        //alert(JSON.stringify(userOrders))
            if(userOrders.length>0){
                //userOrders.push(tempOrders);
                console.log('userOrders')
                localStorage.setItem("userOrders", JSON.stringify(userOrders));
            }
        }
    }
