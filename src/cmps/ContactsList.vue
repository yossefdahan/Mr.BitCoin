<template>
  <section class="contacts-list">
    <TransitionGroup name="list" tag="ul">
      <li v-for="contact in contacts" :key="contact._id" @click="onNavigate(contact._id)">
        <ContactPreview :contact="contact" />
        <div class="btns-container">
          <button class="remove-btn" @click.stop="onRemoveContact(contact._id)">X</button>
          <RouterLink class="edit-btn" @click.stop :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
        </div>
      </li>

    </TransitionGroup>

  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

export default {
  props: {
    contacts: Array,
    required: true
  },
  components: {
    ContactPreview,
  },
  data() {
    return {

    }
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
    onNavigate(contactId) {
      this.$router.push(`/contact/${contactId}`);
    },
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang='scss'>
.contacts-list {

  & ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 5px 50px;

    & li {
      flex: 1 1 200px;
      // min-width: fit-content;
      max-width: 300px;
      display: flex;
      text-align: center;
      justify-content: space-between;
      background-color: #303031;
      padding: 10px;
      color: whitesmoke;
      border-radius: 18px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;

      &:hover {
        background-color: #404041;
        // transform: translateY(-5px);

      }

      &:active {
        background-color: #1d1d1e;
        // transform: translateY(0);

      }

      & .btns-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        & .remove-btn {
          background-color: inherit;
          border: none;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          font-size: 12px;
          color: whitesmoke;
          transition: background-color 100ms ease-in-out;
          transition: transform 300ms ease-in-out;
          cursor: pointer;
          z-index: 1;

          &:hover {
            background-color: orangered;
            transform: scale(1.3) rotate(360deg);


          }

        }

        & .edit-btn {
          color: whitesmoke;
          font-size: 0.8em;

          transition: background-color 100ms ease-in-out;
          transition: transform 300ms ease-in-out;
          padding: 3px;
          border-radius: 8px;

          &:hover {
            background-color: orangered;
            transform: scale(1.2);
            transform: translateY(-4px);
          }

        }
      }
    }
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>