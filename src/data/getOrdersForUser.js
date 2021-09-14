export default function getOrdersForUser(username){
    const curUsr=username;
    let allOrders = [];
    let userOrders = [];
    let tempOrders = [];
    let cleanOrder = {id: 0, username: "", total: 0, products: []}

    allOrders=JSON.parse(localStorage.getItem("ordersGlobal"));
    if(allOrders.length > 0){
        for(let i=0; i<allOrders.length; i++){
            if(allOrders[i].username === curUsr){
                cleanOrder.id=allOrders[i].id;
                cleanOrder.username=allOrders[i].username;
                cleanOrder.total=allOrders[i].total;
                userOrders.push(cleanOrder);
                cleanOrder = {id: 0, username: "", total: 0, products: []}
                allOrders.splice(i,1);
            }
        }
        //alert(JSON.stringify(userOrders))
        if(userOrders.length > 0){
            for(let i=0; i<userOrders.length; i++){
                for(let j=0; j<allOrders.length; j++){
                    if(userOrders[i].id === allOrders[j].id){
                        userOrders[i].products.push(allOrders[j]);
                        tempOrders.push(allOrders[j]);
                    }
                }
            }
            if(tempOrders.length>0){
                //userOrders.push(tempOrders);
                localStorage.setItem("userOrders", JSON.stringify(userOrders));
            }
        }
    }
}