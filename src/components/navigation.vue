<template>
<body>
<header>
  <img class="logo" src="" alt="logo">
  <nav>
    <ul class="nav_links">
      <li><router-link :to="{name:'home'}">Home</router-link></li>
      <li><router-link :to="{name:'cart'}">Cart</router-link></li>
      <li><router-link :to="{name:'orders'}">Order History</router-link></li>
      <li><router-link :to="{name:'about'}">About us</router-link></li>
    </ul>
  </nav>
  <div class="desno">
    <div>Hello, kurac od mitje nagi peder 300 {{curUsr}}</div>

  </div>
</header>
<div id="mali">
  <button>Log in</button>
  <button>Log out</button>
  <button>Register</button></div>
</body>
</template>

<script>
export default {
  name: "navigation"
}
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
</style>