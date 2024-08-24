<template>
<section class="main-container">
 <header>
  <AppHeader/>
  <UserMsg />
 </header>
 <main>
  <RouterView/>
 </main>

 <footer>
  <AppFooter/>
 </footer>
</section>
</template>

<script>

import AppFooter from './cmps/AppFooter.vue';
import AppHeader from './cmps/AppHeader.vue';
import UserMsg from './cmps/UserMsg.vue';
export default {


  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  }
  
}

</script>



<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
& header{
  position: relative;
}
  & main{
 display: flex;
 align-items: center;
 justify-content: center;
 flex-grow: 1;
 margin-top: 11vh;
 margin-bottom: 4vh;
  }

}
</style>
