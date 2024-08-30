<template>
  <section class="app-header">
    <h1>Mr.BitCoin</h1>

    <button @click="toggleNav" class="hamburger-menu">
      ☰
    </button>

    <div :class="{ 'nav-open': isNavOpen }" class="nav-container">
      <nav>
        <RouterLink @click="toggleNav" to="/">Home</RouterLink>
        <RouterLink @click="toggleNav" to="/about">About</RouterLink>
        <RouterLink @click="toggleNav" to="/contacts">Contacts</RouterLink>
        <RouterLink @click="toggleNav" to="/Statistics">Charts</RouterLink>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
  },
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

  & h1 {
    position: static;
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    letter-spacing: 1.5px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #585858, 0 0 70px #585858, 0 0 80px #585858, 0 0 100px #585858, 0 0 150px #585858;
    animation: shadowPulse 2000ms infinite ease-in-out;
  }

  .hamburger-menu {
    display: none;
    background: none;
    border: none;
    font-size: 2em;
    color: whitesmoke;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .nav-container {
    display: flex;
    align-items: center;
  }

  nav {
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

  @media (max-width: 630px) {
    .hamburger-menu {
      display: block;
    }

    .nav-container {
      position: absolute;
      top: 7vh;
      left: 0;
      right: 0;
      background-color: #303031;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease;
    }

    .nav-open {
      max-height: 200px;

    }

    nav {
      flex-direction: column;
      width: 100%;
      text-align: center;

      & a {
        padding: 10px 0;
        width: 100%;
        border-bottom: 1px solid #fff;

        &:last-child {
          border-bottom: none;
        }
      }
    }
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