<template>
 <section class="contacts-list">
    <TransitionGroup name="list" tag="ul">
        <li v-for="contact in contacts" :key="contact._id">
            <ContactPreview :contact="contact" />
            <button class="remove-btn" @click="onRemoveContact(contact._id)">X</button>
        </li>

    </TransitionGroup>
  
 </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

export default {
  props:{
    contacts: Array,
    required: true
  },
  components:{
    ContactPreview,
  },
  data() {
    return {
      
    }
  },
  methods: {
    onRemoveContact(contactId){
        this.$emit('remove', contactId)
    }
  },
  computed: {
  },
  mounted() {
}
}
</script>

<style lang='scss'>
  .contacts-list{
    
    & ul{
      display: flex;
     flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      gap: 20px;
    list-style: none;

    &  li {
        min-width: 360px;
        max-width: 100%;
       display: flex;
       background-color: #303031;
padding: 10px;
justify-content: space-between;
text-align: center;
color: whitesmoke;


& .remove-btn{
background-color: inherit;
border: none;
border-radius: 50%;
width: 22px;
height: 22px;
font-size: 12px;
color: whitesmoke;
transition:background-color 100ms ease-in-out;
transition: transform 300ms ease-in-out;
cursor: pointer;
&:hover{
    background-color: orangered;
    transform: scale(1.3) rotate(360deg);
    
 
}
}
    }
    }
  }

  .list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>