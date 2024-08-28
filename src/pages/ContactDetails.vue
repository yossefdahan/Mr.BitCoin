<template>
  <div class="details-page">
    <div class="back-button-container">
      <RouterLink to="/contacts"><button>Back</button></RouterLink>
    </div>
    <section class="main-container">
      <article v-if="contact">
        <div>
          <img :src="`https://robohash.org/${contact._id}`" alt="contact img">
        </div>

        <div class="contact-info">
          <h3>{{ contact.name }}</h3>
          <p>{{ contact.email }}</p>
          <p>{{ contact.phone }}</p>
        </div>



      </article>
      <div v-else>
        <Loader />
      </div>
      <div>
        <TransferFunds :contact="contact" />
        <TransactionList :transactions="filteredTransactions" />
      </div>
    </section>
  </div>
</template>

<script>
import Loader from '@/cmps/Loader.vue';
import TransferFunds from '@/cmps/TransferFunds.vue';
import TransactionList from '@/cmps/TransactionList.vue';
import { contactService } from '@/services/contactService';
import { mapGetters } from 'vuex';

export default {

  data() {
    return {
      contact: null,
    }
  },

  computed: {
    ...mapGetters(['transactions']),
    filteredTransactions() {
      // Ensure contact is loaded before filtering transactions
      if (!this.contact) return [];
      return this.transactions.filter(
        (transaction) => transaction.toId === this.contact._id
      );
    },
  },
  async created() {
    const { id: contactId } = this.$route.params
    this.contact = await contactService.get(contactId)
    await this.$store.dispatch('loadUser'); // Ensure transactions are loaded
  },


  components: {
    Loader,
    TransferFunds,
    TransactionList,
  }
}

</script>

<style lang='scss'>
.details-page {



  & .back-button-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;

    & a {
      text-decoration: none;
    }

    & button {
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: bold;
      color: #ffffff;
      background-color: #303031;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;

      &:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  & .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;

    & article {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 20px;
      background-color: #303031;
      border-radius: 8px;
      box-shadow: 4px 4px 14px 4px rgba(255, 255, 255, 0.747);

      & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
        box-shadow: 0px 0px 8px 3px rgba(255, 255, 255, 0.767);
      }

      & .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & h3 {
          margin: 0;
          font-size: 1.5rem;
          color: whitesmoke;
        }

        & p {
          margin: 5px 0;
          font-size: 1rem;
          color: whitesmoke;
        }
      }
    }

    & div[v-else] {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  }
}
</style>