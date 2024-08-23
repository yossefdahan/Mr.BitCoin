<template>
<section v-if="user" class="home-page-container">
   <p>Welcome {{user.userName}}</p>
   <p>Your balance is {{user.balance}}</p>
   <p>Your balance is {{rate}}</p>
</section>
<section v-else>
  <Loader />
</section>
</template>



<script >
import Loader from '@/cmps/Loader.vue';
import { bitcoinService } from '@/services/bitcoin.service';
import { userService } from '@/services/user.service';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      user:null,
      rate:0
    }
  },

  async created() {
this.user=userService.getLoggedinUser()
 this.rate=await bitcoinService.getRate(this.user.balance)
  }
}
</script>

<style lang='scss'>
  .home-page-container{
  display: flex;
  flex-direction: column;
  align-items: center;
align-self: flex-start;
  padding: 30px;
  width: fit-content;
  font-size: 1.3em;
width: 400px;
  color: whitesmoke;
 background-color: #585858;
  box-shadow: 0 0 6px 1px #ffffff7a;
  }
</style>