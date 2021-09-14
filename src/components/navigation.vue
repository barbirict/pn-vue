<template>
  <head>

  </head>
<body>
<header>
  <img class="logo" src="https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg" alt="logo" height="50" width="150">
  <nav>
    <ul class="nav_links">
      <li><router-link :to="{name:'home'}">Home</router-link></li>
      <li v-if="isAdmin===false && isLogin === true"><router-link :to="{name:'basket'}">Cart</router-link></li>
    <li v-if="isLogin === true"><router-link :to="{name:'usrhistory'}">Order History</router-link></li>
      <li><router-link :to="{name:'about'}">About us</router-link></li>
      <li v-if="isAdmin===true && isLogin === true"><router-link :to="{name:'admin'}">Admin panel</router-link></li>
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
  <button class="btn" v-if="isLogin===false"  onclick="location.href='/register';">Register</button></div>
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
      this.curUsr=null;
      logoutAttempt();

    },
    sampleData(){
      localStorage.setItem("curUsr", '{"username":"admin","name":"tilen","pass":"123455","email":"vlki.jurac@gmail.com","number":"0000000000","role":1}');
      localStorage.setItem("userbase",'[{"username":"klinkec","name":"janez","pass":"haha123","email":"janez.mali@gejmail.com","number":"123456789","role":0},{"username":"jaki","name":"tilen","pass":"brat","email":"afs@gnm.com","number":"haha123","role":0},{"username":"bokibond","name":"Boki","pass":"pobrezje123","email":"heheh@gnm.com","number":"666999888","role":0},{"username":"admin","name":"tilen","pass":"kraljj","email":"testni@gnm.com","number":"987654231","role":1}]');
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