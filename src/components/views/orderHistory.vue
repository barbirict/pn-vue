<template>
  <header>
    <h1> Order History </h1>
  </header>
<div class="order-list">
    <order-card
      v-for="order in orderList"
      :key="order.id"
      :order="order"
    />
</div>
</template>

<script>

import OrderCard from "@/components/elements/orderCard";
import getOrdersForUser from "@/data/getOrdersForUser";
export default {
  name: "orderHistory",
  components: {OrderCard},
  created() {
    getOrdersForUser(JSON.parse(localStorage.getItem("curUsr")).username);
    this.orderList = JSON.parse(localStorage.getItem("userOrders"));
  },
    data(){
      return {
        orderList : []
      }
    }
  }
</script>

<style scoped/>
