<template>
 <ContactsList v-if="contacts" :contacts="contacts" @remove="removeContact"/>
</template>

<script>
import ContactsList from '@/cmps/ContactsList.vue';


export default {
  components: {
    ContactsList,
  },
 
methods: {
 async removeContact(contactId){
  
       try {
        await this.$store.dispatch({ type: 'removeContact', contactId })
    
       } catch (error) {
        
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