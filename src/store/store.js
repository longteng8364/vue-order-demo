import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        menuItems: [],
        currentUser: null,
        isLogin: false,
        hasSuccess: false,
        hasWarning: false,
        alertMsg: ''
    },
    getters: {
        getMenuItems: state => state.menuItems,
        currentUser: state => state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations: {
        setMenuItems(state, data){
            state.menuItems = data;
        },
        removeMenuItems(state, data){
            state.menuItems.forEach((item, index) => {
                if(item == data){
                    state.menuItems.splice(index, 1)
                }
            })
        },
        pushToMenuItems(state, data){
            state.menuItems.push(data)
        },
        userStatus(state, user){
            if(user){
                state.currentUser = user
                state.isLogin = true
            }else{
                state.currentUser = null
                state.isLogin = false
            }
        },
        alertWarning(state, data){
            state.hasWarning = true,
            state.alertMsg = data
        },
        alertSuccess(state, data){
            state.hasSuccess = true,
            state.alertMsg = data
        },
        clearAlert(state){
            state.hasSuccess = false,
            state.hasWarning = false,
            state.alertMsg = ''
        }
    },
    actions: {
        setUser({commit}, user){
            commit('userStatus', user)
        },
        clearAlert({commit}){
            setTimeout(() => {
                commit('clearAlert')
            }, 2000)
        }
    }
})