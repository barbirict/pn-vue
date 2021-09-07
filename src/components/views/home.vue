<template>
<body>
<header>
  <h1> Home </h1>
</header>
</body>
</template>

<script>
export default{
  name: 'index',
  props: {
    msg: String
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
</style>