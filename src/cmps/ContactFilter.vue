<template>



  <div class="filter-container">

    <transition name="slide" mode="out-in">
      <section v-if="isOpen" class="contact-filter">
        <input @input="onFilterBy" type="text" v-model="filterBy.name" placeholder="Search by name">
        <input @input="onFilterBy" type="email" v-model="filterBy.email" placeholder="Search by email">
        <input @input="onFilterBy" type="text" v-model="filterBy.phone" placeholder="Search by phone">

      </section>
    </transition>
  </div>

  <button class="open-modal" @click="toggleModal">
    {{ !isOpen ? '🔎 Search' : "🔎Close" }}
  </button>

</template>

<script>
import { contactService } from '@/services/contactService'
export default {
  emits: ['filter'],

  data() {
    return {
      filterBy: null,
      isOpen: false
    }
  },
  methods: {
    onFilterBy() {
      this.$emit('filter', this.filterBy)
    },
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  },

  created() {
    this.filterBy = contactService.getDefaultFilter()
  }
}
</script>

<style lang='scss'>
.filter-container {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
}


.contact-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;


  margin: 0 auto;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1em;
    transition: border-color 0.3s, box-shadow 0.3s;
    background: inherit;
    color: whitesmoke;

    &:focus {
      border-color: #1d50db;
      box-shadow: 0 0 5px rgba(29, 80, 219, 0.5);
      outline: none;
    }

    &::placeholder {

      color: whitesmoke;
      font-style: italic;
    }

  }

}

.open-modal {
  position: absolute;
  right: 10%;
  display: flex;
  align-items: center;
  top: 139px;
  height: 50px;

  background: none;
  border: none;
  font-size: 1.5em;

  color: whitesmoke;
  cursor: pointer;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>