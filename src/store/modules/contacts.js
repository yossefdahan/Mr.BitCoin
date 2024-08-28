import { contactService } from "@/services/contactService.js"


export const contact = {
    state: {
        contacts: null,

    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },

        removeContact({ contacts }, { contactId }) {
            const idx = contacts.findIndex(contact => contact._id === contactId)
            contacts.splice(idx, 1)
        },
    },

    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.query(filterBy)
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
    },

    getters: {
        contacts(state) {
            return state.contacts
        },
    }
}