<template>
  <div class="item-card">
    <h3>{{product.title}}</h3>
    <p>{{product.description}}</p>
    <p>{{product.price}} €</p>
    <button v-if="isLogin===true" class="btn" v-on:click="addToCart">add to cart</button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  created() {
    if(localStorage.getItem("curUsr") != null){
      this.curUsr = JSON.parse(localStorage.getItem("curUsr"));
      this.isLogin = true;
      if(this.curUsr != null) {
        if (this.curUsr.role === 1) this.isAdmin = true;
      }
      else this.isLogin=false;
    }
    },
  data(){
    return{
      isLogin: false,
    }
  },
  methods:{
    addToCart(){
      this.$store.commit('addToCart', this.product)
    }
  }
}
</script>

<style scoped>

.item-card{
  width: 250px;
  display: block;
  //padding: 10px;
  background-color: #c7c5c1;
  border-radius: 10%;
  border: solid grey;
  padding: 10px, 20px, 20px, 10px;
  text-align: center;
  margin: 50px;;

}

.item-card button{
  background-color: #e67395;
  color: white;
}
.item-card button:hover{
  background-color: #e85881;
  color: white;
}

.item-card button:active{
  background-color: #f5aec2;
  color: black;
}
</style>