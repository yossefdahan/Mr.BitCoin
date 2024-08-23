<template>
    <div class="statistics-page">
      <h1>Statistics</h1>
      <nav>
<RouterLink to="/statistics/bar">Bar Chart</RouterLink>
<RouterLink to="/statistics/line">Line Chart</RouterLink>
</nav>

<RouterView/>
    </div>
  </template>
  
  <script>
  import BarChart from '@/cmps/BarChart.vue';
import LineChart from '@/cmps/LineChart.vue';
  
  export default {
    components: {
        BarChart,
        LineChart,
    }
  };
  </script>
  
  <style lang="scss">

  .statistics-page{
    display: flex;
    flex-direction: column;
   align-items: center;
   justify-content: space-between;
//  max-height: 600px;
//  max-width: 1000px;
//  padding: 30px;
    color: whitesmoke;

    & h1{
      font-size: 2em;
      margin: 10px 0 20px 0;
    }
& nav{
   display: flex;
   justify-content: space-between; 
   
    & a{
      color: whitesmoke;
      margin: 10px 0 60px 0;
      padding: 10px;
      position: relative;
      animation: bounce 0.6s infinite ease-in-out;
      transition: transform 0.2s ease-in-out;

      &.router-link-active{
        color:rgb(29, 80, 219);
        font-weight: bold;
        font-size: 1.1em;
        animation: none;
    }
    // &:hover {
    //     animation: bounce 0.6s infinite ease-in-out;
    //   }
  }
}
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px); /* 3px jump up */
  }
}
  </style>
  