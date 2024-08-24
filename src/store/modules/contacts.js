import { contactService } from "@/services/contactService.js"


export const contact = {
    state: {
        contacts: null,
        filterBy: null
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },

        removeContact({ contacts }, { contactId }) {
            const idx = contacts.findIndex(contact => contact._id === contactId)
            contacts.splice(idx, 1)
        },

        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },


    actions: {
        async loadContacts({ commit, state }) {
            try {
                const contacts = await contactService.query(state.filterBy)
                commit({ type: 'setContacts', contacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },

        async removeContact({ commit }, { contactId }) {
            try {
                await contactService.remove(contactId)
                commit({ type: 'removeContact', contactId })
            } catch (error) {

            }

        },

        loadFilter({ commit }) {
            const filterBy = contactService.getDefaultFilter()

            commit({ type: 'setFilter', filterBy })
        },

        async setFilterBy({ commit, dispatch }, filterBy) {
            commit({ type: 'setFilter', filterBy });
            await dispatch('loadContacts');  // Reload contacts based on the new filter
        },
    },


    getters: {
        contacts(state) {
            return state.contacts
        },

        filterBy(state) {
            return state.filterBy
        }
    }
}