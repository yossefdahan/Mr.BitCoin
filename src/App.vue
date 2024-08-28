<template>
<section class="main-container">
 <header>
  <AppHeader/>
  <UserMsg />
 </header>
 <main>
   <RouterView v-slot="{ Component }" >

     <transition name="slide" mode="out-in">
       <component :is="Component" :key="$route.path"></component>
    </transition>
  </RouterView>
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
    flex-grow: 1;
    margin-top: 8vh;
    margin-bottom: 4vh;
    flex-direction: column;
    align-items: center;
  }

}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-530px);
}
</style>
