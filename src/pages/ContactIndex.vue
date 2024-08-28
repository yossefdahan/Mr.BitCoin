<template>
  <div class="contact-index">
    <div class="contact-filter-container">
      <ContactFilter @filter="filterContacts" />

    </div>
    <RouterLink to="contact/edit">
      <button class="add-btn">Add New Contact</button>
    </RouterLink>
    <ContactsList v-if="contacts" :contacts="contacts" @remove="removeContact" />
  </div>
</template>
<script>
import ContactsList from '@/cmps/ContactsList.vue';
import ContactFilter from '@/cmps/ContactFilter.vue';
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';


export default {
  components: {
    ContactsList,
    ContactFilter,
  },

  methods: {
    async removeContact(contactId) {
      try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
        showSuccessMsg(`Contact ${contactId} removed successfully`)
      } catch (error) {
        showErrorMsg('Failed to remove contact')
      }
    },

    async filterContacts(filterBy) {
      await this.$store.dispatch({ type: 'loadContacts', filterBy });
    },

  },
  async created() {
    this.$store.dispatch({ type: 'loadContacts' })

  },

  computed: {
    contacts() {
      return this.$store.getters.contacts
    },

  }
}
</script>

<style lang='scss'>
.contact-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  justify-content: center;

  & .contact-filter-container {
    display: flex;
    align-items: center;
    justify-content: center;
    // position: fixed;
    // top: 1.5vh;
    gap: 1em;
  }

  & .add-btn {
    background-color: inherit;
    color: whitesmoke;
    border: 1px solid whitesmoke;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: whitesmoke;
      color: black;
    }
  }
}
</style>