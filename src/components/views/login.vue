<template>
  <body>
  <div>
    <h1> <i>Prijava</i> </h1>
    <form>
      <div class="form-container">
        <div class="form-element">
          <label>Your name</label>
          <input type="text" v-model="name" placeholder="" autofocus>
        </div>
        <div class="form-element">
          <label>Username</label>
          <input type="text" v-model="username" placeholder="" autofocus>
        </div>
        <div class="form-element">
          <label>Password</label>
          <input type="text" v-model="pass" placeholder="" autofocus>
        </div>
        <div class="form-element">
          <label>e-mail</label>
          <input type="text" v-model="email" placeholder="" autofocus>
        </div>
        <div class="form-element">
          <label>mobile number</label>
          <input type="text" v-model="number" placeholder="" autofocus>
        </div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
  </body>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

h1 {
  font-family: 'Poppings', sans-serif;
  font-weight: bold;
  color: antiquewhite;
  text-align: center;
}

.form-container {
  margin-right: 40%;
  margin-left: 40%;
  margin-top: 100px;
  padding: 30px;
  background-color: rgba(66,66,66,0.42);
  border-radius: 25px;
  overflow: auto;
  justify-content: center;

}
.form-container button{
  margin-left: 25%;
  margin-right: 25%;
}
.form-container input {
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}
.form-container label{
 margin-right: 5%;
  display: block;
  align-self: center;
}

.form-element{
  display: block;
  padding-bottom: 3%;
}
</style>