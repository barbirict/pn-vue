<template>
  <div class="cart-item-wrapper">
    <div class="cart-item">
      {{product.title}}
    </div>
    <div class="cart-item-quan">
      {{product.quantity}}
    </div>
    <div class="cart-item-pric">
      {{product.price}}€
    </div>
    <button class="btn" v-on:click="removeItem">X</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods:{
    removeItem(){
      this.$store.commit('removeFromCart', this.product);
      this.$forceUpdate();
      window.location.href = "/basket"
    }
  }
}
</script>

<style scoped>
.cart-item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-right: 15%;
  padding-left: 15%;

}

.cart-item {
  width: 150px;
  height: 20px;
}
.cart-item-quan{
  width: 150px;
  height: 20px;

}
.cart-item-pric{
  width: 150px;
  height: 20px;

}
.cart-item-wrapper .btn {
  color:red;
  background-color: white;
  height: 20px;
  width: 30px;
}
</style>