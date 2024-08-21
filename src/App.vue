<template>
<section class="main-container">
 <header>
  <AppHeader/>
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
export default {


  components: {
    AppHeader,
    AppFooter,
  }
  
}

</script>



<style >
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}
</style>
