import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let estado = {
    token: localStorage.getItem('token') || null,
    usuario:{}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state,{token, user}){
        state.token =  token
        state.usuario = user
    },
    DESLOGAR(state){
        state.token = null
        state.usuario = {}
        localStorage.removeItem('token');
    }
}

export default  new Vuex.Store({
    state: estado,
    mutations
})