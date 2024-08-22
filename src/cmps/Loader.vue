<template>
    <div  class="loader">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
   
    data() {
      return {
        showLoader: true,
      };
    },
  
  };
  </script>
  
  <style scoped>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 9999;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(2, 230, 40, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  