<template>
  <h3 style="text-align: center; color: white;">ADMIN PANEL</h3>
  <div class="user-list">
    <div class="user-selection">
      <input list="kurac" v-model="sel_user">
      <datalist id="kurac">
        <option v-for="users in userlist" :key="users">{{users.username}}</option>
      </datalist>
      <button class="btn" v-on:click="onConfirm">Confirm</button>
    </div>
    <div class="user-info">
      <ul>
        <div class="data-item">
          <h6>username:</h6>
          <li v-if="sel_user_o!=null">{{sel_user_o.username}}</li>
        </div>
        <div class="data-item">
          <h6>name:</h6>
          <li v-if="sel_user_o!=null">{{sel_user_o.name}}</li>
        </div>
        <div class="data-item">
          <h6>password:</h6>
          <li v-if="sel_user_o!=null">{{sel_user_o.pass}}</li></div>
        <div class="data-item">
          <h6>email:</h6>
          <li v-if="sel_user_o!=null">{{sel_user_o.email}}</li>
        </div>
        <div class="data-item">
          <h6>role:</h6>
          <li v-if="sel_user_o!=null">{{sel_user_o.role}}</li>
        </div>
      </ul>
      <button class="btn" v-on:click="userDelete">delete user</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminPanel",
  data(){
    return{
      userlist: JSON.parse(localStorage.getItem("userbase")),
      sel_user: '',
      sel_user_o: null
    }
  },
  methods:{
    onConfirm(){
      for(let i=0; i<this.userlist.length; i++){
        if(this.userlist[i].username === this.sel_user){
          this.sel_user_o=this.userlist[i];
          break;
        }
      }
    },
    userDelete(){
      for(let i=0; i<this.userlist.length-1; i++){
        //alert(this.userlist.username+' '+this.sel_user_o.username )
        if(this.userlist[i].username === this.sel_user_o.username){
          this.userlist.splice(i, 1);
          localStorage.setItem('userbase', JSON.stringify(this.userlist));
          alert("deleted user " + this.sel_user_o.username);
          this.sel_user_o= null;

          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.user-list{
  border: solid #00000080;
  border-radius: 40px;
  background-color: #5c5a5a80;
  display: block;
  margin-right: 30%;
  margin-left: 30%;

}

.user-selection{
  postion: relative;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
}

.user-info{
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  postion: relative;

}

.data-item{
  margin-bottom: 5px;
}

.data-item li{
  list-style-type: none;
  color: black;

}

.data-item h6{
  padding: 0;
  margin: 0;
  text-align: left;
}
.user-info{
  position: relative;
  text-align: left;
}
.user-info .btn{
  background-color: red;
  color: white;
  margin-left: 20%;
  margin-bottom: 10%;

}
</style>