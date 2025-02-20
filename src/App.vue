<script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';

  import ForecastList from "./components/ForecastList.vue";
  import StartPage from "./components/StartPage.vue";
  // import MoviePage from './components/MoviePage.vue';

  const weatherDisplay = ref(null);
  const route = useRoute();

  

  function handleFetchWeather(category) {
    weatherDisplay.value.fetchWeather(category)};


</script>

<template>

  
  <router-view v-slot="{ Component }">
    <component 
      :is="Component" 
      @fetch-weather="handleFetchWeather" 
    />
  </router-view>
  <ForecastList ref="weatherDisplay" />
   
    
  
</template>
