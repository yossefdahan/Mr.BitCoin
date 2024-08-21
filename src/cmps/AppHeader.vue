<template>
    <section class="app-header">
  <h1>Mr.BitCoin</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contacts">Contacts</RouterLink>
  </nav>
</section>
</template>

<script>
export default {
  
 
}
</script>

<style lang='scss'>
  .app-header{
      position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    background-color: #36d6c1;
    box-shadow: -1px 6px 10px 1px rgb(0 255 52 / 40%);
   color: rgb(10, 10, 10);
   height: 5vh;
   margin-bottom: 30px;
& nav{
    display: flex;
    gap: 1em;
    
}
& h1{
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fa, 0 0 70px #0fa, 0 0 80px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
}
  }
</style>