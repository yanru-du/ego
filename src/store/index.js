import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import login from './Login'
export default new Vuex.Store({
 modules:{
   login
 }
})
