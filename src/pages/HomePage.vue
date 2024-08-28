<template>
  <section v-if="user" class="home-page-container">
    <p>Welcome {{ user.name }}</p>
    <p>Your balance is {{ user.balance }}</p>
    <p>Your Bitcoin rate is {{ rate }}</p>
    <TransactionList :transactions="lastTransactions" />
  </section>
  <section v-else>
    <Loader />
  </section>
</template>

<script>
import Loader from '@/cmps/Loader.vue';
import TransactionList from '@/cmps/TransactionList.vue';
import { bitcoinService } from '@/services/bitcoin.service';
import { mapGetters } from 'vuex';

export default {
  components: {
    Loader,
    TransactionList,
  },
  data() {
    return {
      rate: 0,
    }
  },

  async created() {
    try {
      await this.$store.dispatch('loadUser');
      this.rate = await bitcoinService.getRate(this.user.balance);
    } catch (error) {
      console.error('Failed to load user or Bitcoin rate:', error);
    }
  },

  computed: {
    ...mapGetters(['user', 'lastTransactions']),
  },
}
</script>

<style lang='scss'>
.home-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 400px;
  color: whitesmoke;
  background-color: #585858;
  box-shadow: 0 0 6px 1px #ffffff7a;
  margin-top: 10vh;
}
</style>
