<script setup >
  const emit = defineEmits(['fetch-weather']);

  function onClick(location) {
    emit('fetch-weather', location);

  }

  import imageSrc from '../assets/flake.png'
  
</script>

<style>
  body{
    background: #000;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;

  }
  .header {
    display:flex;
  }
  .welcomeImage{
    height:300px;
    width: 40%;
   display: flex;
   justify-content: flex-end;
  }
  .welcomeImage :hover {
    filter: drop-shadow(2px 2px 8px rgb(204, 231, 246));

  }
  .welcomeText {
    display: flex;
    flex-direction:column;
    justify-content: center;
    margin-bottom: 10px;
  }
 .welcomeText  h1 {
    font-weight: bold;
    font-size: 8em;
    font-variant: small-caps;
    margin:0;
    padding:0;
    line-height: 65%;
  }
  .movieBox{
    display: flex;
    justify-content: center;
  }
  .locationChooser {
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 20px;
    }
  .buttonWrapper{
    display: flex;
   
    justify-content: center;
    align-content: center;
    
  }

  .locationChooser button {
    margin-left: 10px;
    margin-right: 10px;
  }
  .ice{
  color:rgb(152, 222, 252);
  font-weight: bold;
  
  /* margin: 10px; */
  }

</style>
<!-- <span class="ice"> </span>  -->

<template>
  <div class="header">
    <div class="welcomeImage">
      <img alt="snowflake" :src="imageSrc" height="300px" />
    </div>
  <div class="welcomeText">
    <!-- <img src="Labb2HampusJ/assets/flake.png" /> -->
    <h1>let there be powder</h1>
    <h4>why book your skitrip before you know if there's gonna be any good skiing? </h4>
  </div>
</div>
<div class="movieBox">
<router-link :to="{ path: '/movies', query: { message: 'Hope you like Candide!' }}">
    <button>Watch a movie first to get excited!</button>
</router-link>
</div>
    
<div class="locationChooser">
  <p class ="ice">Help us narrow down our search for you by choosing a location on the buttons below</p>
<div class="buttonWrapper">
  
  <button @click="onClick('uc')">USA / CANANDA</button>
  <button @click="onClick('eu')">EUROPE</button>
  <button @click="onClick('jp')">JAPAN</button>
</div>


</div>






</template>

