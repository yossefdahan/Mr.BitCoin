// import { contactService } from "@/services/contactService.js";

// export const filters = {
//     state: {
//         filterBy: null,
//     },

//     mutations: {
//         setFilter(state, { filterBy }) {
//             state.filterBy = filterBy
//         },
//     },


//     actions: {
//         loadFilter({ commit }) {
//             const filterBy = contactService.getDefaultFilter()

//             commit({ type: 'setFilter', filterBy })
//         },

//         setFilterBy({ commit }, filterBy) {
//             commit({ type: 'setFilter', filterBy })
//             return contactService.query(filterBy)
//         },
//     },


//     getters: {

//         filterBy(state) {
//             return state.filterBy
//         }
//     }

// }