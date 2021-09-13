<template>
  <head>

  </head>
<body>
<header>
  <img class="logo" src="" alt="logo">
  <nav>
    <ul class="nav_links">
      <li><router-link :to="{name:'home'}">Home</router-link></li>
     <!-- <li><router-link :to="{name:'cart'}">Cart</router-link></li>
      <li><router-link :to="{name:'orders'}">Order History</router-link></li>-->
      <li><router-link :to="{name:'about'}">About us</router-link></li>
    </ul>
  </nav>
  <div class="desno">
    <div v-if="isLogin===true">Hello, {{ curUsr.name}}</div>
    <div v-else>Not logged in!!</div>


  </div>
</header>
<div id="mali">
  <button class="btn" v-if="isLogin===false" onclick="location.href='/login';">Log in</button>
  <button class="btn" v-if="isLogin===true" v-on:click="logOut">Log out</button>
  <button class="btn" v-if="isLogin===false" onclick="location.href='/register';">Register</button></div>
  <button class="btn" v-on:click="sampleData">Sample data fill</button>
</body>
</template>

<script>
import logoutAttempt from "@/data/logout";
export default {
  name: "navigation",
  created() {
    if(localStorage.getItem("curUsr") != null) {
      this.curUsr = JSON.parse(localStorage.getItem("curUsr"));
      this.isLogin = true;
      if (this.curUsr != null) {
        if (this.curUsr.role === 1) this.isAdmin = true;
      }
      else this.isLogin=false;
    }
    },
  methods: {
    logOut() {
      this.isLogin=false;
      logoutAttempt();

    },
    sampleData(){
      localStorage.setItem("curUsr", '{"username":"admin","name":"tilen","pass":"123455","email":"vlki.jurac@gmail.com","number":"0000000000","role":1}');
    }
  },
  data() {
    return{
      curUsr : null,
      isLogin : false,
      isAdmin : false
    }
  }
};
</script>

<style scoped>

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#mali{
  display: block;
  float: right;
}
.logo{
display: block;;
}
.desno{
display: flex;
  justify-content: space-between;
}
.nav_links {
  list-style: none;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.nav_links li {
  display: inline-block;
  padding: 0px 20px;
}
.btn{
  background-color: #adaca8;
  border: none;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  font-size: 15px;
  box-shadow: -2px 3px 1px #757472;
}

.btn:hover{
  background-color: #c7c5c1;
}

.btn:active{
  background-color: #757472;

}
</style>