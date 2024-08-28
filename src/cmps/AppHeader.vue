<template>
  <section class="app-header">

    <h1>Mr.BitCoin</h1>


    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contacts">Contacts</RouterLink>
      <RouterLink to="/Statistics">Charts</RouterLink>
    </nav>
  </section>
</template>

<script>
import ContactFilter from '@/cmps/ContactFilter.vue';
export default {
  components: {
    ContactFilter,
  }

}
</script>

<style lang='scss'>
.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  height: 7vh;


  background-color: #303031;
  box-shadow: -1px 6px 10px 1px #dbdbdb77;
  color: #0a0a0a;

  z-index: 10;

  & nav {
    display: flex;
    gap: 1em;
    letter-spacing: 0.5px;

    & a {
      color: whitesmoke;
      transition: color, text-shadow 300ms ease-out;

      &.router-link-active {
        color: rgb(29, 80, 219);
        font-weight: bold;
        text-shadow: 0 0 10px #fff, 0 0 4px #fff, 0 0 10px #fff;
      }
    }
  }

  & h1 {
    position: static;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    letter-spacing: 1.5px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #585858, 0 0 70px #585858, 0 0 80px #585858, 0 0 100px #585858, 0 0 150px #585858;
    animation: shadowPulse 2000ms infinite ease-in-out;
  }
}

@keyframes shadowPulse {

  0%,
  100% {
    font-weight: 600;
    text-shadow: 0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #fff,
      0 0 40px #585858,
      0 0 70px #585858,
      0 0 80px #585858,
      0 0 100px #585858,
      0 0 150px #585858;
  }

  50% {

    font-weight: 800;
    text-shadow: 0 0 20px #fff,
      0 0 30px #fff,
      0 0 40px #fff,
      0 0 50px #585858,
      0 0 80px #585858,
      0 0 100px #585858,
      0 0 120px #585858,
      0 0 180px #585858;
  }
}
</style>