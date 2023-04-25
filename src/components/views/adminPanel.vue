<template>
  <h3 style="text-align: center; color: white;">ADMIN PANEL</h3>
  <div class="user-list">
    <div class="user-selection">
      <input list="kurac" v-model="sel_user">
      <datalist id="kurac">
        <option v-for="users in userlist" :key="users">{{ users.username }}</option>
      </datalist>
      <button class="btn" v-on:click="onConfirm">Confirm</button>
    </div>
    <div class="user-info">
      <ul>
        <div class="data-item" >
          <h6>username:</h6>
          <li v-if="sel_user_o!=null" v-on:dblclick="userEdit('username')">{{ sel_user_o.username }}</li>
        </div>
        <div class="data-item">
          <h6>name:</h6>
          <li v-if="sel_user_o!=null" v-on:dblclick="userEdit('name')">{{ sel_user_o.name }}</li>
        </div>
        <div class="data-item">
          <h6>password:</h6>
          <li v-if="sel_user_o!=null" v-on:dblclick="userEdit('password')">{{ sel_user_o.pass }}</li>
        </div>
        <div class="data-item">
          <h6>email:</h6>
          <li v-if="sel_user_o!=null" v-on:dblclick="userEdit('email')">{{ sel_user_o.email }}</li>
        </div>
        <div class="data-item">
          <h6>role:</h6>
          <li v-if="sel_user_o!=null" v-on:dblclick="userEdit('role')">{{ sel_user_o.role }}</li>
        </div>
      </ul>
      <button class="btn" v-on:click="userDelete">delete user</button>
    </div>
  </div>
  <div class="order-list">
    <div class="order-selection">
      <h2 style="color: white; margin-left: 37%"> Orders of user </h2>
      <input list="orders" v-model="sel_order" style="margin-left: 35%; margin-bottom: 5px">
      <datalist id="orders">
        <option v-for="order in userOrders" :key="order.id">{{ order.id }}</option>
      </datalist>
      <button class="btn" v-on:click="onConfirmOrder()">Confirm</button>
    </div>
<order-card
  :order="sel_order_d"
  />
  </div>
</template>

<script>
//import OrderCard from "@/components/elements/orderCard.vue";

import OrderCard from "@/components/elements/orderCard.vue";

export default {
  name: "adminPanel",
  components: {OrderCard},
  //components: {OrderCard},
  data() {
    return {
      userlist: JSON.parse(localStorage.getItem("userbase")),
      sel_user: '',
      sel_user_o: null,
      orderlist: JSON.parse(localStorage.getItem("ordersGlobal")),
      userOrders: [],
      sel_order: '',
      sel_order_d: ''
    }
  },
  methods: {
    onConfirm() {
      this.userOrders = []
      for (let i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].username === this.sel_user) {
          this.sel_user_o = this.userlist[i];
          break;
        }
      }
      for (let i = 0; i < this.orderlist.length; i++) {
        if (JSON.parse(this.orderlist[i]).username === this.sel_user){
          this.userOrders.push(JSON.parse(this.orderlist[i]))
        }
      }
    },
    userDelete() {
      for (let i = 0; i < this.userlist.length; i++) {
        //alert(this.userlist.username+' '+this.sel_user_o.username )
        if (this.userlist[i].username === this.sel_user_o.username) {
          this.userlist.splice(i, 1);
          localStorage.setItem('userbase', JSON.stringify(this.userlist));
          alert("deleted user " + this.sel_user_o.username);
          this.sel_user_o = null;

          break;
        }
      }
    },
    userEdit(property){
      let data
      switch (property){
        case 'username':
          // eslint-disable-next-line no-case-declarations
          data = prompt('novo username')
          for(let i=0; i < this.userlist.length; i++){
            if(data === this.userlist[i].username){
              alert('user with username already exists')
              return
            }
          }
          // eslint-disable-next-line no-case-declarations
          const oldUsername = this.sel_user_o.username
          this.sel_user = data
          this.sel_user_o.username = data

          for(let i=0; i < this.userlist.length; i++){
            if(oldUsername === this.userlist[i].username){
              this.userlist[i] = this.sel_user_o
              break
            }
            localStorage.setItem('userbase', JSON.stringify(this.userlist))

            for(let i = 0; i < this.orderlist.length; i++){
              if(JSON.parse(this.orderlist[i]).username === oldUsername){
                let tempO = JSON.parse(this.orderlist[i])
                tempO.username = data
                this.orderlist[i] = JSON.stringify(tempO)
              }
            }
          }
          break
        case 'name':
           data = prompt('novo name')
            this.sel_user_o.name = data
          for(let i=0; i < this.userlist.length; i++) {
            if (this.sel_user === this.userlist[i].username) {
              this.userlist[i] = this.sel_user_o
              break
            }
          }
            localStorage.setItem('userbase', JSON.stringify(this.userlist))
          break
        case 'password':
          data = prompt('novo password')
          this.sel_user_o.pass = data
          for(let i=0; i < this.userlist.length; i++) {
            if (this.sel_user === this.userlist[i].username) {
              this.userlist[i] = this.sel_user_o
              break
            }
          }
          localStorage.setItem('userbase', JSON.stringify(this.userlist))
          break
        case 'mail':
           data = prompt('novo mail')
          this.sel_user_o.email = data
          for(let i=0; i < this.userlist.length; i++) {
            if (this.sel_user === this.userlist[i].username) {
              this.userlist[i] = this.sel_user_o
              break
            }
          }
          localStorage.setItem('userbase', JSON.stringify(this.userlist))
          break
        case 'role':
           data = prompt('novo role')
          this.sel_user_o.role = data
          for(let i=0; i < this.userlist.length; i++) {
            if (this.sel_user === this.userlist[i].username) {
              this.userlist[i] = this.sel_user_o
              break
            }
          }
          localStorage.setItem('userbase', JSON.stringify(this.userlist))
          break
      }
    },
    onConfirmOrder() {
      for(let i = 0; i < this.userOrders.length; i++){
        //console.log('usero id: ' + this.userOrders[i].id + ' sel_: ' + this.sel_order)
        if(this.userOrders[i].id === parseInt(this.sel_order)){
          this.sel_order_d = this.userOrders[i]
          break;
        }
      }
    }
  }
}
</script>

<style scoped>
.user-list {
  border: solid #00000080;
  border-radius: 40px;
  background-color: #5c5a5a80;
  display: block;
  margin-right: 30%;
  margin-left: 30%;

}

.user-selection {
  postion: relative;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
}
.order-selection {
  postion: relative;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  align-content: center;
}
.user-info {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  postion: relative;

}

.data-item {
  margin-bottom: 5px;
}

.data-item li {
  list-style-type: none;
  color: black;

}

.data-item h6 {
  padding: 0;
  margin: 0;
  text-align: left;
}

.user-info {
  position: relative;
  text-align: left;
}

.user-info .btn {
  background-color: red;
  color: white;
  margin-left: 20%;
  margin-bottom: 10%;

}
</style>
