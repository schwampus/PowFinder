<script setup>
  import { ref} from 'vue' ;

const weatherData = ref(null);
const error = ref(null);
const loading = ref(null);

const cityName = ref(null);

const forecastDays = ref(7);


async function fetchWeatherForCities(cityList) {
  const results = [];
  for (const city of cityList) {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=d5d77d4a52afec8ca37fea770e84e551`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      results.push({...city, weather:data});
    }
    catch (error) {
      console.error(`Error fetching forecast for ${city.cityname}:`,error);
    }
  }
  return results;
}

async function fetchWeather(category) {
  loading.value = true;
  const filteredCities = filterCities(category);
  weatherData.value = await fetchWeatherForCities(filteredCities);
  loading.value = false;
  }

function filterCities(category) {
const cities = [
    { cityname: "Niseko, JP", latitude: 42.804684, longitude: 140.6873034 },
    { cityname: "Furano, JP", latitude: 43.3419744, longitude: 142.383188 },
    { cityname: "Rusutsu, JP", latitude: 42.7374243, longitude: 140.8754821 },
    { cityname: "Hakuba, JP", latitude: 36.6981042, longitude: 137.862068 },
    { cityname: "Chamonix, FR", latitude: 45.9246705, longitude: 6.8727506 },
    { cityname: "Myrkdalen, NO", latitude: 60.8420056, longitude: 6.4666278 },
    { cityname: "Engelberg, CH", latitude: 46.8208, longitude: 8.4085},
    { cityname: "St. Anton, AT", latitude: 47.961005, longitude: 15.2067363 },
    { cityname: "Cervinia, IT", latitude: 45.9356034, longitude: 7.6304397 },
    { cityname: "Les Arcs, FR", latitude: 45.61852843, longitude: 6.7694313 },
    { cityname: "Åre, SE", latitude: 63.4010888, longitude: 13.0822241 },
    { cityname: "Hintertux, AT", latitude: 47.1150202, longitude: 11.6824994 },
    { cityname: "Tromsø, NO", latitude: 69.6516345, longitude: 18.9558585 },
    { cityname: "Ruka, FI", latitude: 66.1702656, longitude: 29.1311291 },
    { cityname: "Whistler, CA", latitude: 50.1171903, longitude: -122.9543022 },
    { cityname: "Kicking Horse, CA", latitude: 51.2982585, longitude: -116.9642785 },
    { cityname: "Revelstoke, CA", latitude: 50.998045, longitude: -118.1956709 },
    { cityname: "Telluride, US", latitude: 37.9374939, longitude: 107.812285 },
    { cityname: "Aspen, US", latitude: 39.1911128, longitude: -106.8235606 },
    { cityname: "Haines, US", latitude: 59.2358333, longitude: 118.1956709 },
    { cityname: "Breckenridge, US", latitude: 32.7558392, longitude: -98.9032554 }
    ];

  switch(category) {
    case 'jp' : 
      return cities.filter(city => city.cityname.endsWith("JP"));
    case 'eu' :
      return cities.filter(city => ["FR","NO","SE","AT","IT","FI","CH"].some(code => city.cityname.endsWith(code)));
    case 'uc' :
    return cities.filter(city => ["US","CA"].some(code => city.cityname.endsWith(code)));
    default:
      return [];
  }
  
}

defineExpose({fetchWeather});

</script>

<!-- weatherData.0.weather.daily -->



<style>
  .displayForecast {
    display:flex; 
    align-items: center;
    flex-direction: column;
  }
  ul{
    list-style-type: none;
  }
  li {
    margin: 10px;
  }

  .emoji-space {
  display: inline-block;
  width: 1.4em; /* Matches emoji size */
  height: 1em;
}
  </style>


<template>
  <div class="displayForecast"> 
    <label for="forecastDays" class="ice">How many days forecast would you like to see?</label>
    <select id="chooseDays" v-model="forecastDays">
      <option v-for="n in 7" :key="n" :value="n">{{n}}</option>
      
    </select>
    <ul>
      <li v-for="(city,cityIndex) in weatherData" :key="cityIndex">
        <h2>Upcoming snow forecasts in {{ city.cityname }}</h2>
        <ul>
          <li v-for="(day, dayIndex) in city.weather.daily.slice(0,forecastDays)" :key="dayIndex">
            <span v-if="day.snow > 0">❄️</span>
            <span v-else class="emoji-space"> &nbsp; </span>
            Day {{ dayIndex + 1 }}: Max temp will be <span class="ice"> {{ weatherData[cityIndex].weather.daily[dayIndex].temp.max + "°C." }}</span> {{weatherData[cityIndex].weather.daily[dayIndex]?.summary || 'no summary found' }} & <span class="ice">{{ day.snow || 0 }} cm </span> snow will fall. 
          </li>
        </ul>
      </li>  
    </ul>
    
  </div>

</template>

<!-- /* weatherData[dayIndex].weather.daily[dayIndex].summary */ -->

  
 <!-- d5d77d4a52afec8ca37fea770e84e551  key for openweather
   
   https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


   latlong geocode 
   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
 
 
-->



