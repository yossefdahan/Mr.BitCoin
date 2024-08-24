<template>
 <ContactsList v-if="contacts" :contacts="contacts" @remove="removeContact"/>
</template>

<script>
import ContactsList from '@/cmps/ContactsList.vue';
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';


export default {
  components: {
    ContactsList,
  },
 
methods: {
 async removeContact(contactId){
       try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
    showSuccessMsg(`Contact ${contactId} removed successfully`)
       } catch (error) {
        showErrorMsg('Failed to remove contact')
       } 
    }
},
 async created() {
this.$store.dispatch({ type: 'loadContacts' })

  },

  computed:{
contacts(){
return this.$store.getters.contacts
},

  }
}
</script>

<style lang='scss'>
  
</style>