<template>
  <header>
    <h1> Home </h1>
  </header>
  <div class="cart-item-list">
    <h3>Items in cart:</h3>
    <div class="texts">
      <h4>Title:</h4>
      <h4>Quantity:</h4>
      <h4>Price:</h4>
    </div>
    <cart-item-card
    v-for="product in basket"
    :key="product.id"
    :product="product"
    />
    <div class="cart-total">
      <h4>TOTAL: </h4>
      <div class="cart-total-price">{{cart_total}} €</div>
    </div>
    <button class="btn" v-on:click="doTheShop">BUY NOW!</button>
  </div>
</template>

<script>
import CartItemCard from "@/components/elements/cartItemCard";
export default {
  name: "userCart",
  components: {CartItemCard},
  created() {
    this.basket=JSON.parse(localStorage.getItem("basket"));
  },
  computed: {
    cart_total(){
      return this.$store.getters.cartTotal;
    },
    data(){
      return{
        basket: null,
        product: null
      }
    }

  },
  methods:{
    cartFromLocal(){
      this.basket=JSON.parse(localStorage.getItem("basket"));
    },
    doTheShop(){
      //alert("in");
      let orderOut = [];
      let curOrder = {id: 0, username: "", total: 0}
      let basketer = JSON.parse(localStorage.getItem("basket"));
      let ordersGlobal = JSON.parse(localStorage.getItem("ordersGlobal"));
      let curUsr = JSON.parse(localStorage.getItem("curUsr"));
      let genId = Math.floor(Math.random() * 100000) + 2;
      if(ordersGlobal == null){
        curOrder.id = genId;
        curOrder.username = curUsr.username;
        curOrder.total = this.$store.getters.cartTotal;
        orderOut.push(curOrder);
        for(let i=0; i < basketer.length; i++){
          basketer[i].id = genId;
          orderOut.push(basketer[i]);
        }
        localStorage.setItem("ordersGlobal", JSON.stringify(orderOut));
        alert("Order successful!");
      }
      else{
        curOrder.id = genId;
        curOrder.username = curUsr.username;
        curOrder.total = this.$store.getters.cartTotal;
        ordersGlobal.push(curOrder);
        for(let i=0; i < basketer.length; i++){
          basketer[i].id = genId;
          ordersGlobal.push(basketer[i]);
        }
        localStorage.setItem("ordersGlobal", JSON.stringify(ordersGlobal));
        alert("Order successful!");
      }
      console.log(ordersGlobal);
      localStorage.removeItem("basket");
      location.reload();
    }
  }
}
</script>

<style scoped>
.cart-item-list {
  border: solid #00000080;
  border-radius: 40px;
  background-color: #5c5a5a80;
  display: block;
  margin-right: 30%;
  margin-left: 30%;
  padding-bottom: 20px;
  padding-top: 10px;
  text-align: center;
}

.cart-item-list .btn{
  color: white;
  background-color: green;
}

.texts{
  display: flex;
  justify-content: center;
  align-items: center;
}

.texts h4{
  width: 150px;
  height: 20px;
}

.cart-total{
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-total h4, .cart-total-price{
  width: 300px;
  height: 20px;
}
.cart-total-price{
  font-style: italic;
  font-weight: 600;
}
</style>