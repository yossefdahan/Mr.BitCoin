<template>
    <div class="bar-chart" >
     
  <Line
  v-if="loaded"
  :style="myStyles"    
  id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    
    />
  </div>
  </template>
  
  <script>
  import {  Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement,  PointElement,CategoryScale, LinearScale } from 'chart.js'
  import { bitcoinService } from '@/services/bitcoin.service';
  ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);
  export default {
    name: 'LineChart',
    components: { Line },
    data() {
      return {
        loaded: false,
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'BitCoin Price',
              data:[],
              borderColor: '#42A5F5',
              backgroundColor: 'rgba(66, 165, 245, 0.2)',
              fill: false,
              tension: 0.1,
            }
          ],
        },
        chartOptions: {
    responsive: true,
    // maintainAspectRatio: false,  // Important for responsiveness
    plugins: {
      
          legend: {
            display: true,
          }
        }
    
  },
      }
    },
    async created(){
  
      try {
        const {labels,datasets}= await bitcoinService.getBitcoinChartData()
       this.chartData.labels=labels
       this.chartData.datasets[0].data=datasets[0].data
        this.loaded = true
      } catch (error) {
        console.log(error)
      }
     
  },
  computed:{
    myStyles(){
      return {
        height: '500px',
        backgroundColor: 'whitesmoke',
        borderRadius: '10px',
        boxShadow: '0 0 6px 6px #ffffff7a',
        width: '100%'
      }
    }
  }
  
  }
  </script>
  
  
  
  <style lang="scss">
  .bar-chart{
    width: 100%;
    // max-width: 1000px;
    // max-height: 800px;
  }
  #my-chart-id {
    width: 100%; 
  //   height: 100%;
  }
  
  </style>
  