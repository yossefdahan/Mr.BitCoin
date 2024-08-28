import { createStore } from "vuex";
import { contact } from "./modules/contacts.js"
import { user } from "./modules/user.js"
const options = {
    strict: true,

    state: {

    },

    mutations: {

    },


    actions: {


    },

    getters: {


    },

    modules: {
        contact,
        user,
    }


}

const store = createStore(options)
export default store