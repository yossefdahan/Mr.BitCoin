<template>
  <section class="contact-filter">
    <input 
      @input="onFilterBy" 
      type="text" 
      v-model="localFilter.name" 
      placeholder="Search by name"
    >  </section>
</template>

<script>
export default {
    data() {
        return {
      localFilter: { ...this.filterBy },
    }
  },
  methods: {
    onFilterBy() {
      this.$store.dispatch('setFilterBy', { ...this.localFilter })
    },
  },
  async created() {
    this.$store.dispatch({ type: 'loadFilter' })
  },

  computed:{
    filterBy() {
      return this.$store.getters.filterBy
    },
  }
 
}
</script>

<style lang='scss'>
  
</style>