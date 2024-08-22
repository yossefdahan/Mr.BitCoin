<template>
  <article>

<div>
    <img :src="`https://robohash.org/${contact._id}`" alt="contact img">
</div>

  <div class="contact-info">
    <h3>{{contact.name}}</h3>
    <p>{{contact.email}}</p>
    <p>{{contact.phone}}</p>
   </div>

  </article>
</template>

<script>
export default {
  props:{
    contact: Object,
    required: true
  },
  data() {
    return {
      
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
}
}
</script>

<style lang='scss'>
article{
display: flex;
justify-content: center;
align-items: center;

    & img{
      width: 100px;
    }

    & .contact-info{
        font-size: 14px;
       
    }
}

</style>