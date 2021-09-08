import { createStore } from 'vuex'

function  updateBasket(cart) {
    localStorage.setItem("basket",JSON.stringify(cart))
}

export default  createStore({
    state: {
        cart: [],
    },
    getters:{
        productQuantity: state => product =>{
            const item = state.cart.find(i => i.id === product.id )
            if (item) return item.quantity;
            else return null;
        },
        cartItems: state => {
            return state.cart;
        },
        cartTotal: state => {
            return state.cart.reduce((a,b) => a + (b.price * b.quantity), 0);
        }
    },
    mutations:{
        addToCart (state, product){
            let item = state.cart.find (i => i.id === product.id);

            if(item != null) item.quantity++;
            else state.cart.push({...product, quantity: 1});

            updateBasket(state.cart);
        },
        removeFromCart(state, product){
            let item = state.cart.find(i=> i.id === product.id)
            if (item != null) {
                if(item.quantity > 1) item.quantity--;
                else state.cart = state.cart.filter(i => i.id !== product.id)
            }
            updateBasket(state.cart);
        },
        updateCartFromBasket(state){
            const basket = localStorage.getItem("basket");
            if(basket != null) state.cart = JSON.parse(basket);
        }

    }
})