<template>
<div class="cart-item-list">
  <h3>Items in order {{order.id}}</h3>
  <div class="texts">
    <h4>Title:</h4>
    <h4>Quantity:</h4>
    <h4>Price:</h4>
  </div>
  <order-item-card
      v-for="product in order.products"
      :key="product.id"
      :product="product"
  />
  <div class="cart-total">
    <h4>TOTAL: </h4>
    <div class="cart-total-price">{{order.total}} €</div>
  </div>
</div>
</template>

<script>
import OrderItemCard from "@/components/elements/orderItemCard";
export default {
  name: "orderCard",
  components: {OrderItemCard},
  props: ['order'],
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
  margin-bottom: 15px;
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