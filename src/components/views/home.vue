<template>
<body>
<header>
  <h1> Home </h1>
</header>
<div class="item-list">
  <product-card
  v-for="product in games"
  :key="product.id"
  :product="product"
  />
</div>
</body>
</template>

<script>
import games from '@/data/games'
import ProductCard from "@/components/elements/productCard";
export default{
  name: 'index',
  components: {ProductCard},
  props: {
    msg: String
  },
  data(){
    return{
      games: games,
      product: null
    }
  }
}
</script>

<style scoped>

html {
  background-color: #64995c;
}
h1 {
  font-family: 'Poppings', sans-serif;
  color: antiquewhite;
  text-align: center;
}

.item-list{
  border: solid #00000080;
  border-radius: 40px;
  background-color: #5c5a5a80;
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  margin-left: 10%;

}
</style>