<template>
  <div class="bar-chart" >
   
<Bar
v-if="loaded"
:style="myStyles"    
id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  
  />
</div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '@/services/bitcoin.service';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'BitCoin Price',
            data:[],
            backgroundColor: "lightgrey",
            borderColor: "black",
            borderWidth: 1,
            borderRadius:30,
          }
        ],
      },
      chartOptions: {
  responsive: true,
  // maintainAspectRatio: false,  // Important for responsiveness
 
  
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
