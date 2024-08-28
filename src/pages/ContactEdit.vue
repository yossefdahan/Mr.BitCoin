<template>

  <div class="contact-edit-page">
    <h1 v-if="contact">{{ contact._id ? 'Edit Contact' : 'New Contact' }}</h1>

    <form v-if="contact" @submit.prevent="onSave" class="contact-edit">
      <input v-model="contact.name" name="name" placeholder="Name" />
      <input v-model="contact.phone" name="phone" placeholder="Phone" />
      <input v-model="contact.email" name="email" placeholder="Email" />
      <button class="btn">{{ contact._id ? 'Save Changes' : 'Save' }}</button>
    </form>
  </div>
</template>

<script>
import { contactService } from '@/services/contactService'
export default {

  data() {
    return {
      contact: null
    }
  },
  methods: {
    async onSave() {
      try {
        await contactService.save(this.contact)
        this.$router.push('/contacts')
      } catch (error) {

      }
    },

  },
  async created() {
    const { _id: contactId } = this.$route.params
    if (contactId) {
      this.contact = await contactService.get(contactId)
    } else {
      this.contact = contactService.getEmptyContact()
    }

  }
}
</script>

<style lang='scss'>
.contact-edit-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // background: linear-gradient(135deg, #2b2a2ab0, #fffbfbbe);
  padding: 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
  }

  .contact-edit {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2b2a2ab0;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 20px #ffffff;
    max-width: 400px;
    width: 100%;

    input {
      margin: 10px 0;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #ddd;
      padding: 0 15px;
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        border-color: #1d50db;
        outline: none;
        box-shadow: inset 0px 0px 6px 3px #2e56c3d9;
      }
    }

    .btn {
      margin-top: 20px;
      padding: 10px 20px;
      background: #1d50db;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s;

      &:hover {
        background-color: #163eaf;
        transform: translateY(-2px);
      }

      &:active {
        background-color: #0f2b7a;
        transform: translateY(0);
      }
    }
  }
}
</style>